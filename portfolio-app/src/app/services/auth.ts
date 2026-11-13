import { Injectable, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private router = inject(Router);

  // ¿Hay una sesión iniciada?
  logueado = signal(false);

  // Página a la que se vuelve después del login
  private urlDeRetorno = '/inicio';

  constructor() {
    // Recuerda la última página visitada (menos el propio login)
    this.router.events.subscribe((evento) => {
      if (evento instanceof NavigationEnd && !evento.urlAfterRedirects.startsWith('/login')) {
        this.urlDeRetorno = evento.urlAfterRedirects;
      }
    });
  }

  iniciarSesion() {
    this.logueado.set(true);
  }

  cerrarSesion() {
    this.logueado.set(false);
  }

  // Guarda un lugar puntual al que volver (por ejemplo, un proyecto)
  guardarRetorno(url: string) {
    this.urlDeRetorno = url;
  }

  obtenerRetorno() {
    return this.urlDeRetorno;
  }
}