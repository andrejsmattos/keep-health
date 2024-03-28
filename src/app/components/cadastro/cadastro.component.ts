import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
  imports: [
    ReactiveFormsModule,
    RouterLink
  ]
})

//conecta dados de formulário de template e TS
export class CadastroComponent {
  formCadastro = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    peso: new FormControl(''),
    altura: new FormControl(''),
    dataNascimento: new FormControl(''),
    cep: new FormControl(''),
    senha: new FormControl(''),
    confirmarSenha: new FormControl(''),
  });
  localStorage: Storage | undefined;

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document){
    this.localStorage = document.defaultView?.localStorage;
  }
  

  cadastrarUsuario() {
    //confirma se todos os campos foram preenchidos
    if (
      this.formCadastro.value.nome === '' ||
      this.formCadastro.value.email === '' ||
      this.formCadastro.value.dataNascimento === '' ||
      this.formCadastro.value.senha === ''
    ) {
      alert('Preencha todos os campos para concluir seu cadastro');

      //confirma se as senhas conferem
    } else if (this.formCadastro.value.senha !== this.formCadastro.value.confirmarSenha) {
      alert('A senha dos campos "senha" e "confirmar senha" devem ser iguais');
    } else {

  
      //se email já estiver cadastrado no localStorage usuário é redirecionado para tela de login
      let listaUsuarios = this.getUsersStorage();
      if (listaUsuarios.find((user: {email: string;}) => user.email === this.formCadastro.value.email)) {
        alert(`Email já está cadastrado. Faça o login para iniciar sua sessão.`);
        this.router.navigate(['/login']);

        // novo usuário é adicionado na lista de usuários, enviada para a loalStorage
      } else {
          const novoUsuario = {
            nome: this.formCadastro.value.nome,
            email: this.formCadastro.value.email,
            dataNascimento: this.formCadastro.value.dataNascimento,
            senha: this.formCadastro.value.senha
          }
          let listaUsuarios = this.getUsersStorage();
        listaUsuarios.push(novoUsuario);
        this.localStorage?.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
        alert('Usuário cadastrado com sucesso!');
        this.formCadastro.reset();
        this.router.navigate(['home'])
      }
    }
  }
  
  // volta para tela de login
  voltarLogin(){
    this.router.navigate(['/login']);
  };

  // armazena lista de usuários no localStorage
  getUsersStorage(){
    const listaVazia: string[] = [];
    const usuarios = this.localStorage?.getItem('listaUsuarios');
    if(!!usuarios) {
      return JSON.parse(usuarios);
    } else {
      this.localStorage?.setItem('listaUsuarios', JSON.stringify(listaVazia));
      return [];
    };
  }
}
