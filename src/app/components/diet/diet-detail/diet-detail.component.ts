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
  styleUrl: './diet-detail.component.css'
})
export class DietDetailComponent {

  paramValue: any = 0;

  constructor(private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(){
    console.log(this.router.url);
    this.activatedRoute.params.subscribe((params)=>{
      console.log(params);
      this.paramValue = params['id']
    });
  }

}
