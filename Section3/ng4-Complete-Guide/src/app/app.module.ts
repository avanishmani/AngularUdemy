import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/recipe/recipe-item/recipe-item.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShopingEditComponent } from './shoping-list/shoping-edit/shoping-edit.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeService } from './recipes/recipe.service';
import { ShoppinngListService } from './shoping-list/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
     RecipesComponent,
      RecipeComponent,
       RecipeDetailsComponent,
        RecipeItemComponent,
         ShopingListComponent,
          ShopingEditComponent,
          DropdownDirective
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [RecipeService,ShoppinngListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
