import { Component, Input, OnInit ,EventEmitter,Output} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  template: `
   <a href="#"
    class="list-group-item clearfix"
     (click)="onSelected()">
      <div class="pull-left">
          <h4 class="list-group-item-handling">{{res.name}}</h4>
          <p class="list-group-item-text">{{res.description}}</p>
        </div>
        <span class="pull-right">
          <img src="{{res.imagePath}}"
           alt="{{res.name}}"
            class="img-responsive"
             style="max-height:50px;">
        </span>
      </a>
  `,
  styles: [
  ]
})
export class RecipeItemComponent implements OnInit {
  @Input() res:Recipe;
  // @Output() recipeSelected=new EventEmitter<void>();
  constructor( private recipeService: RecipeService){}
  ngOnInit(): void {
      
  }
  onSelected(){
    this.recipeService.recipeSelected.emit(this.res);
    // this.recipeSelected.emit();
  }

}
