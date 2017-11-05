import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { Receta } from '../receta.model';

@Component({
  selector: 'app-receta-lista',
  templateUrl: './receta-lista.component.html',
  styleUrls: ['./receta-lista.component.css']
})
export class RecetaListaComponent implements OnInit {
  recetas: Receta[] = [
    new Receta('Pollo con mole', 'Poshito con mole poblano, para 6 personas',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Receta('Bacalao a la Vizcaína', 'Un pececito que alcanza para 10 personas',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];
  @Output() elementoSeleccionado = new EventEmitter<Receta>();

  constructor() { }

  onElementoSeleccionado(receta: Receta) {
    this.elementoSeleccionado.emit(receta);
  }

  ngOnInit() {
  }

}
