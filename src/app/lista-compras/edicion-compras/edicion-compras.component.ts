import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingrediente} from "../../compartido/ingrediente.model";

@Component({
  selector: 'app-edicion-compras',
  templateUrl: './edicion-compras.component.html',
  styleUrls: ['./edicion-compras.component.css']
})
export class EdicionComprasComponent implements OnInit {

  @Output() nuevoAgregado = new EventEmitter<Ingrediente>();
  constructor() { }

  adicion(nombre: string, cantidad: number) {
    this.nuevoAgregado.emit(new Ingrediente(nombre, cantidad));
  }

  ngOnInit() {
  }

}
