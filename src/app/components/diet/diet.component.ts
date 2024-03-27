import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { Router } from '@angular/router';
import { DietService } from '../../services/diet.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule
  ],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.css'
})
export class DietComponent {

  // dietas: any=[];
  
  // constructor(private dietService: DietService, private router: Router){}
  
  // ngOnInit() {
  //   this.dietService.listAll().subscribe({
  //     next: (response: any) => {
  //       this.dietas = response},
  //       error: () => {}
  //     })
  //   }
    
  //   redirectToDetail(id: string){
  //     this.router.navigate(['diet', id])
  //   }
  }
  
