import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Experiencia, Portfolio } from '../../services/portfolio';
import { ExperienciaCard } from '../experiencia-card/experiencia-card';

@Component({
  imports: [ExperienciaCard],
  selector: 'app-sobre-mi',
  styleUrl: './sobre-mi.css',
  templateUrl: './sobre-mi.html',
})
export class SobreMi {
  private portfolio = inject(Portfolio);

  experiencias = toSignal(this.portfolio.getExperiencia(), { initialValue: [] });
  skills = toSignal(this.portfolio.getSkills(), { initialValue: [] });

  // Experiencia elegida en la tarjeta (llega por el Output)
  seleccionada = signal<Experiencia | null>(null);

  mostrarDetalle(experiencia: Experiencia) {
    this.seleccionada.set(experiencia);
  }
}
