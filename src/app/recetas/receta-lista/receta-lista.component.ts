import { Component, OnInit } from '@angular/core';

import { Receta } from '../receta.model';

@Component({
  selector: 'app-receta-lista',
  templateUrl: './receta-lista.component.html',
  styleUrls: ['./receta-lista.component.css']
})
export class RecetaListaComponent implements OnInit {
  recetas: Receta[] = [
    new Receta('A Test Receta', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Receta('A Test Receta', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
