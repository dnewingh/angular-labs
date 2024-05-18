import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ToySelector001Component } from './toy-selector-001/toy-selector-001.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'toy-selector-001',
        component: ToySelector001Component,
        title: 'Toy Selector'
    }
];
