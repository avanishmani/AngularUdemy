import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  template: `
  <div class="row">
    <div class="col-xs-12">
      <button class="btn btn-success">New Recipe</button>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-xs-12">
    
    <app-recipe-item
     *ngFor="let res of recipes"
     [res]=res
     ></app-recipe-item>
    </div>
  </div>
    <!-- <app-recipe-item></app-recipe-item> -->
  `,
  styles: [
  ]
})
export class RecipeComponent implements OnInit {
 
  recipes: Recipe[];
  constructor( private  recipeService:RecipeService){}
ngOnInit(): void {
  this.recipes=this.recipeService.getRecipes();
}

}
