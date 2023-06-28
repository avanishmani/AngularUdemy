import { Component,OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinngListService } from './shopping-list.service';

@Component({
  selector: 'app-shoping-list',
  template: `
   <div class="row">
    <div class="col-xs-">
      <app-shoping-edit></app-shoping-edit>
      <hr>
      <ul class="list-group">

        <a href="#"
         class="list-group-item"
         style="cursor:pointer" 
         *ngFor="let ing of ingredients">
      {{ing.name}} ({{ing.amount}})
      </a>
      </ul>
    </div>
   </div>
  `,
  styles: [
  ]
})
export class ShopingListComponent implements OnInit{
ingredients:Ingredient[];
constructor(private slService:ShoppinngListService){}
ngOnInit(): void {
  //this.ingredients=this.slService.getIngredient();

  this.slService.ingredientsChanged.subscribe(
    (ingredients:Ingredient[])=>{
      this.ingredients=ingredients;
    }
  );
}

}
