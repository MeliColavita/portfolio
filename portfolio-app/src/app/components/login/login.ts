import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
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
  }
}