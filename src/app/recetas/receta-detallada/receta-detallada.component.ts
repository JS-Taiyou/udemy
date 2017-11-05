import {Component, Input, OnInit} from '@angular/core';
import {Receta} from "../receta.model";

@Component({
  selector: 'app-receta-detallada',
  templateUrl: './receta-detallada.component.html',
  styleUrls: ['./receta-detallada.component.css']
})
export class RecetaDetalladaComponent implements OnInit {

  @Input() recetaActual: Receta;

  constructor() {
    this.recetaActual = null;
  }

  ngOnInit() {
  }

}
