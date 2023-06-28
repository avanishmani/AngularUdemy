import { Ingredient } from "../shared/ingredient.model";
import { ShoppinngListService } from "../shoping-list/shopping-list.service";
import { Recipe} from "./recipe/recipe.model";
import{EventEmitter,Injectable} from '@angular/core';
@Injectable()
export class RecipeService{
    recipeSelected=new EventEmitter<Recipe>();
   private recipes: Recipe[]=[
        new Recipe("A Test Recipe","This is simply a test","https://www.foodandwine.com/thmb/nDBGGuZzVOHIUkLT_fWorNv3nS8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Tamarind-Chicken-FT-RECIPE0522-80072d93f7bc4bc7abf1dcf5b5317b0c.jpg",[new Ingredient('Meat',1),new Ingredient('French Fried',20)]),
        new Recipe("Chicken Handi","Creamy Boneless Chicken Handi","https://tasteofmissions.com/wp-content/uploads/2020/06/restaurant-style-chicken-handi-500x500.jpg",[new Ingredient('Buns',1),new Ingredient('Meet',1)])
      ];
      constructor(public slService:ShoppinngListService){}
    getRecipes(){
        return this.recipes.slice();
    }
    AddIngredientToShoppingList(ingredient:Ingredient[]){
        this.slService.addInngredients(ingredient);        
    }  
}