import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    CommonModule
  ]
})

//conecta dados de formulário de template e TS
export class CadastroComponent {
  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.maxLength(3)]),
    email: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.email]),
    peso: new FormControl('', [Validators.required, Validators.maxLength(3)]),
    altura: new FormControl('', [Validators.required, Validators.maxLength(3)]),
    dataNascimento: new FormControl('', Validators.required),
    cep: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    senha: new FormControl('', Validators.required),
    confirmarSenha: new FormControl('', Validators.required),
  });
  localStorage: Storage | undefined;

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document){
    this.localStorage = document.defaultView?.localStorage;
  }
  
  get nome(){
    return this.formCadastro.get('nome')!;
  }

  get email(){
    return this.formCadastro.get('email')!;
  }

  get peso(){
    return this.formCadastro.get('peso')!;
  }

  get altura(){
    return this.formCadastro.get('altura')!;
  }

  get dataNascimento(){
    return this.formCadastro.get('dataNascimento')!;
  }

  get cep(){
    return this.formCadastro.get('cep')!;
  }

  get senha(){
    return this.formCadastro.get('senha')!;
  }

  get confirmarSenha(){
    return this.formCadastro.get('confirmarSenha')!;
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
            peso: this.formCadastro.value.peso,
            altura: this.formCadastro.value.altura,
            dataNascimento: this.formCadastro.value.dataNascimento,
            senha: this.formCadastro.value.senha,
            auth: false
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
