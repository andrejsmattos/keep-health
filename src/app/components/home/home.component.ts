import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { DialogModule } from 'primeng/dialog';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
        HeaderComponent,
        DialogModule
    ]
})
export class HomeComponent {


    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
    













}
