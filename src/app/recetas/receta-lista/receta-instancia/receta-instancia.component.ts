import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Receta} from "../../receta.model";

@Component({
  selector: 'app-receta-instancia',
  templateUrl: './receta-instancia.component.html',
  styleUrls: ['./receta-instancia.component.css']
})
export class RecetaInstanciaComponent implements OnInit {
  @Input() receta: Receta;
  @Output() recetaSeleccionada = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  onSeleccionado() {
    this.recetaSeleccionada.emit();
  }

}
