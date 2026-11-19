import { Injectable, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

const authConfig: AuthConfig = {
  issuer: 'https://localhost:9443/oauth2/token',
  clientId: 'MYH7eCA5Zx74CygvxdZfhm7YPusa',
  redirectUri: 'http://localhost:4200',
  postLogoutRedirectUri: 'http://localhost:4200',
  responseType: 'code',
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false
};

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private router = inject(Router);
  private oauth = inject(OAuthService);

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
    this.oauth.configure(authConfig);
    this.oauth.loadDiscoveryDocumentAndTryLogin().then(() => {
      this.logueado.set(this.oauth.hasValidAccessToken());
      const retorno = sessionStorage.getItem('retornoWso2');
      if (this.logueado() && retorno) {
        sessionStorage.removeItem('retornoWso2');
        this.router.navigateByUrl(retorno);
      }
    });
  }

  iniciarSesion() {
    sessionStorage.setItem('retornoWso2', this.urlDeRetorno);
    this.oauth.initCodeFlow();
  }

  cerrarSesion() {
    this.oauth.logOut();
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