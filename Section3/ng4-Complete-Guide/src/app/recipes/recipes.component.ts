import { Component,OnInit } from '@angular/core';
import { Recipe } from './recipe/recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  template: `
   <div class="row">
    <div class="col-md-5">
    <app-recipe-list></app-recipe-list>
    </div>
    <div class="col-md-7">
      <app-recipe-details
      *ngIf="selectedRecipe;else infoText"
      [recipe]="selectedRecipe"></app-recipe-details>
      <ng-template #infoText>
        <p>Please Select a Recipe</p>
      </ng-template>
    </div>

   </div>
  `,
  styles: [
  ]
})
export class RecipesComponent implements OnInit{
selectedRecipe:Recipe;
constructor( private recipeService:RecipeService){}
ngOnInit(): void {
    this.recipeService.recipeSelected
    .subscribe(
      (recipe:Recipe)=>{
        this.selectedRecipe=recipe;
      }
    );
}
}
