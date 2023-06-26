import { Component,OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  template: `
   <div class="row">
    <div class="col-xs-">
      <app-shoping-edit></app-shoping-edit>
      <hr>
      <ul class="list-group">
        <a href="#" class="list-group-item"style="cursor:pointer" *ngFor="let ing of ingredients">
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
ingredients:Ingredient[]=[
  new Ingredient("Apple",5),
  new Ingredient("Tomatoes",10),
];

ngOnInit(): void {
  
}
}
