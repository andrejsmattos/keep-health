import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { CepService } from '../../services/cep.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule  
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

usuarioLogado: {
  nome: string;
  email: string;
  peso: number;
  altura: number;
  dataNascimento: string;
  cep: number;
} | undefined = undefined;
  endereco: any | undefined = undefined;



  constructor(private cepService: CepService) {};

  buscarCep() {
    this.cepService.obterEndereco(this.usuarioLogado?.cep).subscribe(
      {
        next: (response) => {
          this.endereco = response;
          console.log(response);
        },
        error: (error) => {
          console.error(error);
        }
      }
    )
  }
}
