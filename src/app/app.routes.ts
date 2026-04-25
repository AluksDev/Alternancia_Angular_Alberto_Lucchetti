import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio';
import { ServiciosComponent } from './components/servicios/servicios';
import { ContactoComponent } from './components/contacto/contacto';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: ''}
];
