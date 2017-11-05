import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html'
})
export class EncabezadoComponent {
  @Output() caracteristicaRequerida = new EventEmitter<number> ();

  onSelect(caracteristica: number) {
    this.caracteristicaRequerida.emit(caracteristica);
  }

}
