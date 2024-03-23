import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from "../../shared/components/sidebar/sidebar.component";
import { Router, RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';


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
export class CadastroComponent {
  infoCadastro = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    dataNascimento: new FormControl(''),
    senha: new FormControl(''),
    confirmarSenha: new FormControl(''),
  });
  localStorage: Storage | undefined;
  listaUsuarios: string[] = [];

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document){
    this.localStorage = document.defaultView?.localStorage;
  }
  

  cadastrarUsuario() {
    if
      (this.infoCadastro.value.nome === '' ||
      this.infoCadastro.value.email === '' ||
      this.infoCadastro.value.dataNascimento === '' ||
      this.infoCadastro.value.senha === '') {
      alert('Preencha todos os campos para concluir seu cadastro')
    
    } else if (this.infoCadastro.value.senha !== this.infoCadastro.value.confirmarSenha) {
      alert('A senha dos campos "senha" e "confirmar senha" devem ser iguais')

    } else {
    const usuario = { 
      nome: this.infoCadastro.value.nome,
      email: this.infoCadastro.value.email,
      dataNascimento: this.infoCadastro.value.dataNascimento,
      senha: this.infoCadastro.value.senha,
    }
    let listaUsuarios = this.getUsersStorage();
    if (listaUsuarios.find
      ((usuario: { email: string; })=> usuario.email === this.infoCadastro.value.email)){
        alert(`Email já está cadastrado. Faça o login para iniciar sua sessão.`);
        this.router.navigate(['/login']);
      } else {
        this.listaUsuarios.push(usuario);
        this.localStorage?.setItem("usuarioCadastrado", JSON.stringify(this.listaUsuarios));
        alert("Usuário cadastrado com sucesso!");
        this.infoCadastro.reset();
      }

    }
  }

  voltarLogin(){
    this.router.navigate(['/login']);
  };

  getUsersStorage(){
    const listaVazia: string[] = [];
    const usuarios = this.localStorage?.getItem('usuarioCadastrado');
    if(!!usuarios) {
      return JSON.parse(usuarios);
    } else {
      this.localStorage?.setItem('usuarioCadastrado', JSON.stringify(listaVazia));
      return [];
    };

  }
}
