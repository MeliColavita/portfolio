import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Proyectos } from './components/proyectos/proyectos';
import { SobreMi } from './components/sobre-mi/sobre-mi';
export const routes: Routes = [
  { path: '', redirectTo: 'sobre-mi', pathMatch: 'full' },
  { path: 'sobre-mi', component: SobreMi },
  { path: 'proyectos', component: Proyectos },
  { path: 'login', component: Login },
];
