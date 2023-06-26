import { Component, ElementRef, OnInit, ViewChild ,Output,EventEmitter} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoping-edit',
  template: `
   <div class="row">
    <div class="col-xs-1">
      <form class="row">
        <div class="row">
          <div class="col-sm-5 form-group">
            <label for="name">Name</label>
            <input 
            type="text"
             id="name" 
             class="form-control"
             #nameInput>
          </div>
          <div class="col-sm-12 form-group">
            <label for="amount">Amount</label>
            <input 
            type="number" 
            id="amount" 
            class="form-control"
            #amountInput>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <button class="btn btn-success" type="submit"(click)="onAddItem()")>Add</button>
            <button class="btn btn-danger" type="button">Delete Item</button>
            <button class="btn btn-primary" type="button">Clear</button>
          </div>
        </div>
      </form>
    </div>
   </div>
  `,
  styles: [
  ]
})
export class ShopingEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef:ElementRef;
@ViewChild('amountInput') amountInputRef:ElementRef;
@Output() ingredientAdded=new EventEmitter<Ingredient>();
  constructor(){}
ngOnInit(): void {
    
}
onAddItem(){
this.ingredientAdded.emit(new Ingredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value));
}
}
