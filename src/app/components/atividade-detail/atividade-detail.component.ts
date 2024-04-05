import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-atividade-detail',
  standalone: true,
  imports: [
    CardModule
  ],
  templateUrl: './atividade-detail.component.html',
  styleUrl: './atividade-detail.component.scss'
})
export class AtividadeDetailComponent {

}
