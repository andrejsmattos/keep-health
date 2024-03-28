import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-diet-detail',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './diet-detail.component.html',
  styleUrl: './diet-detail.component.scss'
})
export class DietDetailComponent {
  
  // dietas: [
  //   {
      
  //   }
  // ]

  dietId: number = 0;
  diets: any;
  diet: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(){
    console.log(this.router.url);
    this.activatedRoute.params.subscribe((param)=>{
      this.dietId = param['id']
    });

    this.diets = this.getDiets();
    this.diet = this.diets.find((diet: {id: number}) => diet.id == this.dietId )
  }


  getDiets(){
    const diets = localStorage.getItem('diets');
    if(!!diets) {
      return JSON.parse(diets);
    } else {
      return [];
    }
  }


}
