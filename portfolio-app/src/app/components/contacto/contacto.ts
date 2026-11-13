import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Portfolio } from '../../services/portfolio';

@Component({
  imports: [],
  selector: 'app-contacto',
  styleUrl: './contacto.css',
  templateUrl: './contacto.html',
})
export class Contacto {
  private portfolio = inject(Portfolio);

  integrantes = toSignal(this.portfolio.getContacto(), { initialValue: [] });
}
