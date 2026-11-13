import { Component, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { Portfolio, Proyecto } from '../../services/portfolio';
import { Auth } from '../../services/auth';

@Component({
  imports: [],
  selector: 'app-proyectos',
  styleUrl: './proyectos.css',
  templateUrl: './proyectos.html',
})
export class Proyectos {
  private portfolio = inject(Portfolio);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  auth = inject(Auth);

  // Señal con los proyectos que llegan del JSON
  proyectos = toSignal(this.portfolio.getProyectos(), { initialValue: [] });

  // Proyecto elegido para ver el detalle (null = ninguno)
  seleccionado = signal<Proyecto | null>(null);

  constructor() {
    // Si venimos del login, se reabre el proyecto donde se hizo clic
    const id = Number(this.route.snapshot.queryParamMap.get('proyecto'));
    if (id) {
      effect(() => {
        const proyecto = this.proyectos().find((p) => p.id === id);
        if (proyecto) {
          this.seleccionado.set(proyecto);
        }
      });
    }
  }

  verDetalle(proyecto: Proyecto) {
    this.seleccionado.set(proyecto);
  }

  volver() {
    this.seleccionado.set(null);
  }

  // Candado: guarda el proyecto actual y manda al login
  irALogin(proyecto: Proyecto) {
    this.auth.guardarRetorno('/proyectos?proyecto=' + proyecto.id);
    this.router.navigate(['/login']);
  }
}