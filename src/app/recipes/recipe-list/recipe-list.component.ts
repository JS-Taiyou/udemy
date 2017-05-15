import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelection = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("A test recipe", "This is just a test", "https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg"),
    new Recipe("Another test recipe", "This is also a test", "https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg"),
  ];

  onRecipeSelected(recipe: Recipe){
    this.recipeSelection.emit(recipe)
  }
  constructor() { }

  ngOnInit() {
  }

}
