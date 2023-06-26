import { Component } from '@angular/core';
import { Recipe } from './recipe/recipe.model';

@Component({
  selector: 'app-recipes',
  template: `
   <div class="row">
    <div class="col-md-5">
    <app-recipe-list
    (recipeWasSelected)="selectedRecipe=$event"></app-recipe-list>
    </div>
    <div class="col-md-7">
      <app-recipe-details
      *ngIf="selectedRecipe;else infoText"></app-recipe-details>
      <ng-template #infoText>
        <p>Please Select a Recipe</p>
      </ng-template>
    </div>

   </div>
  `,
  styles: [
  ]
})
export class RecipesComponent {
selectedRecipe:Recipe;
}
