import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Proyecto {
  id: number;
  titulo: string;
  tipo: string;
  anio: number;
  equipo: string;
  resumen: string;
  contexto: string;
  problema: string;
  rol: string;
  solucion: string;
  resultado: string;
  tecnologias: string[];
  sitio: string | null;
  repo: string | null;
  documentos: Documento[];
  imagen: string;
}

export interface Experiencia {
  id: number;
  tipo: string;
  titulo: string;
  lugar: string;
  periodo: string;
  descripcion: string;
}

export interface Skill {
  id: number;
  categoria: string;
  items: string[];
}
export interface Documento {
  titulo: string;
  url: string;
}


@Injectable({
  providedIn: 'root',
})
export class Portfolio {
  private http = inject(HttpClient);

  // GET 1: proyectos
  getProyectos() {
    return this.http.get<Proyecto[]>('assets/proyectos.json');
  }

  // GET 2: experiencia
  getExperiencia() {
    return this.http.get<Experiencia[]>('assets/experiencia.json');
  }

  // GET 3: skills
  getSkills() {
    return this.http.get<Skill[]>('assets/skills.json');
  }
}