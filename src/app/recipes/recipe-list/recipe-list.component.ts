import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Carrot cake', 'This is the best carrot cake ever !', 'https://befreshcorp.net/wp-content/uploads/2017/06/product-packshot-Carrot-558x600.jpg'),
    new Recipe('Zucchini cake', 'This is the best zucchini cake ever !', 'https://az836796.vo.msecnd.net/media/image/product/fr/medium/0000000094067.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
