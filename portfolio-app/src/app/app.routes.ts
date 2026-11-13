import { Routes } from '@angular/router';
import { Hero } from './components/hero/hero';
import { Login } from './components/login/login';
import { Proyectos } from './components/proyectos/proyectos';
import { SobreMi } from './components/sobre-mi/sobre-mi';
export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Hero },
  { path: 'sobre-mi', component: SobreMi },
  { path: 'proyectos', component: Proyectos },
  { path: 'login', component: Login },
];
