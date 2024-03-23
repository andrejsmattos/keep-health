import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SidebarComponent } from "../../shared/components/sidebar/sidebar.component";


@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [ReactiveFormsModule, SidebarComponent]
})
export class LoginComponent {

  form = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl('')
  });
  login: any;

  constructor(private router: Router) {}

  // let usuariosCadastrados = {
  //     constructor (email: string, senha: string) {
  //     [
  //       email = this.email.value,
  //       senha = this.senha.value
  //     ]
  //   }
  // };

  entrar() {
    // if (this.login.email && this.login.senha) {
    //   this.router.navigate(['/home']);
    // } else {
    //   window.alert('Por favor, preencha os campos para prosseguir');
    // }  
  };

  cadastrar() {
      this.router.navigate(['/cadastro']);
  }

  esqueciSenha(){
    alert('Sua nova senha é: a1b2c4d4')
  }
}
