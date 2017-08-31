import { Component, OnInit } from '@angular/core';

import { Ingrediente } from '../compartido/ingrediente.model';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent implements OnInit {
  ingredientes: Ingrediente[] = [
    new Ingrediente('Apples', 5),
    new Ingrediente('Tomatoes', 10),
  ];

  constructor() { }

  ngOnInit() {
  }

}
