import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-atividade-detail',
  standalone: true,
  imports: [
    CardModule,
  ],
  templateUrl: './atividade-detail.component.html',
  styleUrl: './atividade-detail.component.scss'
})
export class AtividadeDetailComponent {
  @Input() atividadeSelecionada: { imagem: string; nome: string; } | undefined;
  @Input() date: Date | undefined;
  @Input() distancia: string | undefined;
  @Input() duracao: string | undefined;
}
