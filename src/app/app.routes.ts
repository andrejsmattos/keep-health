import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { DietComponent } from './components/diet/diet.component';
import { DietDetailComponent } from './components/diet-detail/diet-detail.component';
import { ProfileComponent } from './components/profile/profile.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'dietas',
    component: DietComponent
  },
  {
    path: 'dietas-especificacoes',
    component: DietDetailComponent
  },
  {
    path: 'perfil',
    component: ProfileComponent
  },
];
