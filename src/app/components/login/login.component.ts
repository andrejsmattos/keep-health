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

    localStorage;

    constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
        this.localStorage = document.defaultView?.localStorage;    
    };

    ngOnInit(): void {
        this.getUsersStorage();
        this.criarUsuarioTeste();
    };

    getUsersStorage(){
        const listaVazia: string[] = [];
        const listaUsuarios = this.localStorage?.getItem('listaUsuarios');
        if(!!listaUsuarios) {
          return JSON.parse(listaUsuarios);
        } else {
          this.localStorage?.setItem('listaUsuarios', JSON.stringify(listaVazia));
          return [];
        };
      }

    criarUsuarioTeste() {
        let listaUsuarios = this.getUsersStorage();
        let usuarioTeste = {
            nome: 'André',
            email: 'andre@gmail.com',
            dataNascimento: '1989/10/07',
            senha: '123'
        }
        let buscarUsuario = listaUsuarios.find((usuario: { email: string }) => usuario.email === usuarioTeste.email);
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
    
        if (!email || !senha) {
            alert('Preencha todos os campos');
        } else {
            const usuario = this.emailCadastrado();
            if (usuario && usuario.senha === senha) {
                this.router.navigate(['home']);
            } else {
                alert('Usuário ou senha incorretos');
            }
        }
    }

    emailCadastrado(){
        let listaUsuarios = this.getUsersStorage();
        let usuarioJahCadastrado = listaUsuarios.find((usuario: { email: string }) => usuario.email === this.formLogin.value.email);
        return usuarioJahCadastrado;
    };

    cadastrar() {
        this.router.navigate(['cadastro']);
    };

    esqueciSenha() {
        // const email = this.formLogin.value.email;
        // if (email) {
        //     let usuarioJahCadastrado = this['listaUsuarios'].find((usuario: { email: string | null | undefined }) => usuario.email === email);
        //     usuarioJahCadastrado.senha = 'a1b2c4d4';
        //     console.log('esqueci senha chamado')
        //     this.localStorage?.setItem('listaUsuarios', JSON.stringify(['listaUsuarios']));
        //     alert('Sua nova senha é "a1b2c4d4"')
        // } else {
        //     alert('Usuário ainda não cadastrado')
        //     this.router.navigate(['cadastro'])
        // }
    };
}
