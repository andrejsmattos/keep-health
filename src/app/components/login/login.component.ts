import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [ReactiveFormsModule]
})
export class LoginComponent implements OnInit {
    [x: string]: any;

    formLogin = new FormGroup({
        email: new FormControl(''),
        senha: new FormControl('')
    });

    listaUsuarios: any[];

    constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
        this.listaUsuarios = this.getUsersStorage();
    };

    ngOnInit(): void {
        this.getUsersStorage();
        this.criarUsuarioTeste();
    };

    getUsersStorage(){
        const listaUsuarios = localStorage.getItem('listaUsuarios');
        if(!!listaUsuarios) {
          return JSON.parse(listaUsuarios);
        } else {
          localStorage.setItem('listaUsuarios', JSON.stringify([]));
          return [];
        };
      }

    criarUsuarioTeste() {
        let listaUsuarios = this.getUsersStorage();
        let usuarioTeste = {
            nome: 'André',
            email: 'andre@gmail.com',
            peso: 70,
            altura: 173,
            cep: 88040000,
            dataNascimento: '1989/10/07',
            senha: '123',
            auth: false,
        }
        let buscarUsuario = listaUsuarios.find((usuario: { email: string }) => usuario.email === listaUsuarios.email);
        if(!buscarUsuario){
            listaUsuarios.push(usuarioTeste);
            localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
            // alert('Usuário cadastrado com sucesso!')
        } else {
            // alert('Usuário já cadastrado, insira sua senha')
        }
    };
 
    entrar() {
        const email = this.formLogin.value.email;
        const senha = this.formLogin.value.senha;
    
        if (!email) {
            alert('Preencha o campo de email');
        } else if (!senha) {
            alert('Preencha o campo de senha');
        
        } else {
            const usuario = this.emailCadastrado();
            if (usuario && usuario.senha === senha) {
                localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
                this.router.navigate(['home']);
            } else {
                alert('Usuário ou senha incorretos');
            }
        }
    }

    emailCadastrado(){
        let listaUsuarios = this.getUsersStorage();
        return listaUsuarios.find((usuario: { email: string }) => usuario.email === this.formLogin.value.email);
    };

    cadastrar() {
        this.router.navigate(['cadastro']);
    };

    esqueciSenha() {
        const email = this.formLogin.value.email;
        const emailCadastrado = this.emailCadastrado()
        if (email) {
            let usuario = this.listaUsuarios.find((usuario: { email: string | null | undefined }) => usuario.email === email);
            usuario.senha = 'a1b2c4d4';
            console.log('esqueci senha chamado')
            alert('Sua nova senha é "a1b2c4d4"')
            localStorage.setItem('listaUsuarios', JSON.stringify(this.listaUsuarios));
        // } else if (email !== emailCadastrado) {
        //     alert('Usuário ainda não cadastrado')
        }
    };
}
