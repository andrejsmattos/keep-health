import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  form = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    dataNascimento: new FormControl(''),
    senha: new FormControl(''),
    confirmarSenha: new FormControl(''),
  });

  cadastrar() {
    if (this.form.value.senha === this.form.value.confirmarSenha) {
      const usuario = {
        email: this.form.value.email,
        senha: this.form.value.senha
      }
      localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
    }
  }

}
