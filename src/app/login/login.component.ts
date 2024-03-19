import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl('')
  });

  constructor(private router: Router) {}

  entrar() {
    // if (this.login.codigoUsuario && this.login.senha) {
    //   this.router.navigate(['/home']);
    // } else {
    //   window.alert('Por favor, preencha os campos para prosseguir');
    // }  
  }

  cadastrar() {
      this.router.navigate(['/cadastro']);
  }
}
