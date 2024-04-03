import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { DietComponent } from './components/diet/diet.component';
import { DietDetailComponent } from './components/diet/diet-detail/diet-detail.component';
import { ProfileComponent } from './components/profile/profile.component';


export const routes: Routes = [
  {
    path: '',
    title: 'Login',
    component: LoginComponent
  },
  {
    path: 'perfil',
    title: 'Perfil',
    component: ProfileComponent
  },
  {
    path: 'home',
    title: 'Início',
    component: HomeComponent
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    title: 'Cadastro',
    component: CadastroComponent
  },
  {
    path: 'dietas',
    children: [
      { path: '', title: 'Tipos de Dietas',component: DietComponent },
      { path: ':id', component: DietDetailComponent }
    ]
  }
];
