import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes',
  template: `
   <div class="row">
    <div class="col-md-5">
    <app-recipe></app-recipe>
    </div>
    <div class="col-md-7">
      <app-recipe-details></app-recipe-details>
    </div>

   </div>
  `,
  styles: [
  ]
})
export class RecipesComponent {

}
