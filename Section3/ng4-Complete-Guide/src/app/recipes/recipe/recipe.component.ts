import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';

@Component({
  selector: 'app-recipe',
  template: `
  <div class="row">
    <div class="col-xs-12">
      <button class="btn btn-success">New Recipe</button>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-xs-12" *ngFor="let res of recipes">
      <a href="#" class="list-group-item clearfix">
        <div class="pull-left">
          <h4 class="list-group-item-handling">{{res.name}}</h4>
          <p class="list-group-item-text">{{res.description}}</p>
        </div>
        <span class="pull-right">
          <img src="{{res.imagePath}}" alt="{{res.name}}" class="img-responsive" style="max-height:50px;">
        </span>
      </a>
    <app-recipe-item></app-recipe-item>
    </div>
  </div>
    <!-- <app-recipe-item></app-recipe-item> -->
  `,
  styles: [
  ]
})
export class RecipeComponent implements OnInit {
recipes: Recipe[]=[
  new Recipe("A Test Recipe","This is simply a test","https://www.foodandwine.com/thmb/nDBGGuZzVOHIUkLT_fWorNv3nS8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Tamarind-Chicken-FT-RECIPE0522-80072d93f7bc4bc7abf1dcf5b5317b0c.jpg"),
  new Recipe("Chicken Handi","Creamy Boneless Chicken Handi","https://tasteofmissions.com/wp-content/uploads/2020/06/restaurant-style-chicken-handi-500x500.jpg")
];
  constructor(){}
ngOnInit(): void {
  
}
}
