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
        CardModule
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
        this.atividades = [
            { nome: "Caminhada" },
            { nome: "Corrida" },
            { nome: "Natação" },
            { nome: "Ciclismo" },
            { nome: "Yoga" },
            { nome: "Pilates" },
            { nome: "Musculação" },
            { nome: "CrossFit" },
            { nome: "Dança" },
            { nome: "HIIT (High-Intensity Interval Training)" },
            { nome: "Escalada" },
            { nome: "Vôlei" },
            { nome: "Alongamento" },
            { nome: "Pular corda" },
            { nome: "Skate" },
            { nome: "Surf" },
            { nome: "Remo" },
            { nome: "Tai Chi" },
            { nome: "Basquete" },
            { nome: "Tênis" }
        ]
        
    }

    showDialog() {
        this.visible = true;
    }

    salvarDados() {
        if (this.atividadeSelecionada && this.date && (this.distancia || this.duracao)) {
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