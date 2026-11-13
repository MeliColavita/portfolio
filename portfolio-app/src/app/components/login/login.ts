import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';
@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private auth = inject(Auth);
  private router = inject(Router);
  nombre = signal('');
  email = signal('');
  mensaje = signal('');
  enviar(evento: Event) {
    evento.preventDefault();
    const datos = { nombre: this.nombre(), email: this.email() };
    this.mensaje.set('Hola ' + this.email() + ' Login exitoso');
    console.log(this.mensaje());
    console.log(datos);
    this.nombre.set('');
    this.email.set('');
    // Habilita los materiales y vuelve a donde estaba el usuario
    this.auth.iniciarSesion();
    setTimeout(() => this.router.navigateByUrl(this.auth.obtenerRetorno()), 1500);
  }
}