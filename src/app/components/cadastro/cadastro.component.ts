import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from "../../shared/components/sidebar/sidebar.component";
import { Router, RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';

interface Usuario {
  nome: string;
  email: string;
  dataNascimento: string;
  senha: string;
}

@Component({
  selector: 'app-cadastro',
  standalone: true,
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
  imports: [
    ReactiveFormsModule,
    SidebarComponent,
    RouterLink
  ]
})

//conecta dados de formulário de template e TS
export class CadastroComponent {
  formCadastro = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    dataNascimento: new FormControl(''),
    senha: new FormControl(''),
    confirmarSenha: new FormControl(''),
  });
  localStorage: Storage | undefined;
  listaUsuarios: Usuario[] = [];

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

      //se campos estiverem preenchidos e senhas conferirem um novo usuário é criado
      const novoUsuario: Usuario = {
        nome: this.formCadastro.value.nome ?? '',
        email: this.formCadastro.value.email ?? '',
        dataNascimento: this.formCadastro.value.dataNascimento ?? '',
        senha: this.formCadastro.value.senha ?? '',
      };
  
      //se email já estiver cadastrado no localStorage usuário é redirecionado para tela de login
      let listaUsuarios = this.getUsersStorage();
      if (listaUsuarios.find((user: Usuario) => user.email === novoUsuario.email)) {
        alert(`Email já está cadastrado. Faça o login para iniciar sua sessão.`);
        this.router.navigate(['/login']);

        // novo usuário é adicionado na lista de usuários, enviada para a loalStorage
      } else {
        listaUsuarios.push(novoUsuario);
        this.localStorage?.setItem('usuarioCadastrado', JSON.stringify(listaUsuarios));
        alert('Usuário cadastrado com sucesso!');
        this.formCadastro.reset();
      }
    }
  }
  
  // volta para tela de login
  voltarLogin(){
    this.router.navigate(['/login']);
  };

  // armazena lista de usuários no localStorage
  getUsersStorage(){
    const listaVazia: Usuario[] = [];
    const usuarios = this.localStorage?.getItem('usuarioCadastrado');
    if(!!usuarios) {
      return JSON.parse(usuarios);
    } else {
      this.localStorage?.setItem('usuarioCadastrado', JSON.stringify(listaVazia));
      return [];
    };
  }
}
