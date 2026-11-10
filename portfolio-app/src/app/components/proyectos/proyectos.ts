import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Portfolio, Proyecto } from '../../services/portfolio';

@Component({
  imports: [],
  selector: 'app-proyectos',
  styleUrl: './proyectos.css',
  templateUrl: './proyectos.html',
})
export class Proyectos {
  private portfolio = inject(Portfolio);

  // Señal con los proyectos que llegan del JSON
  proyectos = toSignal(this.portfolio.getProyectos(), { initialValue: [] });

  // Proyecto elegido para ver el detalle (null = ninguno)
  seleccionado = signal<Proyecto | null>(null);

  verDetalle(proyecto: Proyecto) {
    this.seleccionado.set(proyecto);
  }

  volver() {
    this.seleccionado.set(null);
  }
}
