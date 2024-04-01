import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { CepService } from '../../services/cep.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CentimetersToMetersPipe } from '../../pipes/centimeters-to-meters.pipe';

@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
    imports: [
        HeaderComponent,
        CommonModule,
        CentimetersToMetersPipe,
    ]
})
export class ProfileComponent {

  listaUsuarios: any;

// usuarioLogado: {
//   nome: string,
//   email: string,
//   peso: number,
//   altura: number,
//   dataNascimento: string,
//   cep: number,
//   auth: boolean,
// } | undefined = undefined;
//   endereco: any | undefined = undefined;

ngOnInit(): void {
  const listaUsuarios = localStorage.getItem('listaUsuarios');
  if(!!listaUsuarios) {
    this.listaUsuarios = JSON.parse(listaUsuarios); // Atribuindo o valor à propriedade listaUsuarios do componente
  } 
}
  // checkUsuarioLogado (){
    //   let listaUsuarios = this.getUsersStorage();
    //   let usuarioLogado = listaUsuarios.find ((usuario: { auth: boolean | null | undefined}) => usuario.auth == true);
    //   return usuarioLogado;
    // };
    
    constructor(private router: Router, private cepService: CepService, private centimetersToMetersPipe: CentimetersToMetersPipe) {};
    // this.usuario = this.checkUsuarioLogado();
    // if(!this.usuario){
    //     alert('Por favor, faça seu login');
    //     this.router.navigate(['login']);
  // }
  
  buscarEndereco() {
    // this.cepService.obterEndereco(this.usuarioLogado?.cep).subscribe(
      //   {
        //     next: (response: any) => {
          //       this.endereco = response;
          //       console.log(response);
          //     },
          //     error: (error: any) => {
            //       console.error(error);
            //     }
            //   }
            // )
  }
  
  
}
    


