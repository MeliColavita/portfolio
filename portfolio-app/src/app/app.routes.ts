import { Routes } from '@angular/router';
import { Contacto } from './components/contacto/contacto';
import { Hero } from './components/hero/hero';
import { Proyectos } from './components/proyectos/proyectos';
import { SobreMi } from './components/sobre-mi/sobre-mi';
export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Hero },
  { path: 'sobre-mi', component: SobreMi },
  { path: 'proyectos', component: Proyectos },
  { path: 'contacto', component: Contacto },
];