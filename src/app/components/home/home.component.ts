import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { DialogModule } from 'primeng/dialog';
import { CommonModule, Time } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { AtividadeDetailComponent } from '../atividade-detail/atividade-detail.component';
import { DateFormatPipe } from '../../pipes/date-format.pipe';



@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
        HeaderComponent,
        DialogModule,
        RouterOutlet,
        CommonModule,
        ButtonModule,
        DropdownModule,
        FormsModule,
        CalendarModule,
        InputNumberModule,
        CardModule,
        AtividadeDetailComponent,
        DateFormatPipe
    ]
})
export class HomeComponent {
    
    atividades: any[] | undefined;
    listaAtividades: any[] = [];

    atividadeSelecionada: string | undefined;
    date: Date | undefined;
    distancia: string | undefined;
    duracao: string | undefined;
    
    visible: boolean = false;
    ngOnInit() {

        const storedActivities = localStorage.getItem('atividades');
        if (storedActivities) {
            this.listaAtividades = JSON.parse(storedActivities);
        }

        this.atividades = [
            { nome: "Caminhada", imagem: 'assets/img/caminhada.jpg' },
            { nome: "Corrida", imagem: 'assets/img/corrida.jpg' },
            { nome: "Natação", imagem: 'assets/img/natacao.jpg' },
            { nome: "Ciclismo", imagem: 'assets/img/ciclismo.jpg' },
            { nome: "Yoga", imagem: 'assets/img/yoga.jpg' },
            { nome: "Musculação", imagem: 'assets/img/musculacao.jpg' },
            { nome: "CrossFit", imagem: 'assets/img/crossfit.jpg' },
            { nome: "Dança", imagem: 'assets/img/danca.jpg' },
            { nome: "Escalada", imagem: 'assets/img/escalada.jpg' },
            { nome: "Vôlei", imagem: 'assets/img/volei.jpg' },
            { nome: "Alongamento", imagem: 'assets/img/alongamento.jpg' },
            { nome: "Skate", imagem: 'assets/img/skate.jpg' },
            { nome: "Surf", imagem: 'assets/img/surf.jpg' },
            { nome: "Futebol", imagem: 'assets/img/futebol.jpg' },
            { nome: "Tai Chi", imagem: 'assets/img/taichi.jpg' },
            { nome: "Basquete", imagem: 'assets/img/basquete.jpg' },
            { nome: "Tênis", imagem: 'assets/img/tenis.jpg' }
        ]
        
    }

    showDialog() {
        this.visible = true;
    }

    salvarDados() {
        if (this.atividadeSelecionada && this.date || (this.distancia || this.duracao)) {
            const novaAtividade = {
                atividadeSelecionada: this.atividadeSelecionada,
                dataAtividade: this.date,
                distancia: this.distancia,
                duracao: this.duracao
            };

            this.listaAtividades.push(novaAtividade);
            localStorage.setItem('atividades', JSON.stringify(this.listaAtividades));

            this.atividadeSelecionada = '';
            this.date = undefined;
            this.distancia = '';
            this.duracao = '';

            this.visible = false;
        } else {
            alert("Preencha os dados para salvar a atividade.");
        }
    }


}