import { Ingredient } from "../shared/ingredient.model";
import{EventEmitter} from '@angular/core';
export class ShoppinngListService{
    ingredientsChanged=new EventEmitter<Ingredient[]>();
  private  ingredients:Ingredient[]=[
        new Ingredient("Apple",5),
        new Ingredient("Tomatoes",10),
      ];
getIngredient(){
    this.ingredients.slice();
}
addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
}
addInngredients(list:Ingredient[]){
// for(let ingredient of list){
//     this.addIngredient(ingredient);
// }
this.ingredients.push(...list);
this.ingredientsChanged.emit(this.ingredients.slice());
}
}