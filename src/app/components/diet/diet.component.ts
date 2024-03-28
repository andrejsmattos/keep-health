import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { Router } from '@angular/router';
import { DietService } from '../../services/diet.service';
import { CommonModule } from '@angular/common';
import { DietDetailComponent } from './diet-detail/diet-detail.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    DietDetailComponent,
    FormsModule
  ],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.scss'
})
export class DietComponent {
  diets: any = [];
  diet: string = ''; // Inicialize diet como uma string vazia
  filteredDiets: any = [];

  constructor(private dietService: DietService, private router: Router) {}

  ngOnInit() {
    this.dietService.listAll().subscribe({
      next: (response: any) => {
        this.diets = response;
        this.filteredDiets = response;
        if (!localStorage.getItem('diets')) {
          localStorage.setItem('diets', JSON.stringify(this.diets));
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  pesquisarDieta() {
    if (!this.diet.trim()) {
      // Se o campo de busca estiver vazio, mostre todas as dietas
      this.filteredDiets = this.diets;
    } else {
      // Se houver um termo de busca, filtre as dietas com base no nome
      this.filteredDiets = this.diets.filter((diet: any) =>
        diet.nome.toLowerCase().includes(this.diet.toLowerCase())
      );
    }
  }

  redirectToDetail(id: string) {
    this.router.navigate(['dietas', id]);
  }
}
