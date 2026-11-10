import { Component, input, output } from '@angular/core';
import { Experiencia } from '../../services/portfolio';

@Component({
  selector: 'app-experiencia-card',
  imports: [],
  templateUrl: './experiencia-card.html',
  styleUrl: './experiencia-card.css',
})
export class ExperienciaCard {
  // Input: dato que recibe del padre (SobreMi)
  experiencia = input.required<Experiencia>();

  // Output: evento que le avisa al padre que se hizo clic
  seleccionar = output<Experiencia>();

  elegir() {
    this.seleccionar.emit(this.experiencia());
  }
}
