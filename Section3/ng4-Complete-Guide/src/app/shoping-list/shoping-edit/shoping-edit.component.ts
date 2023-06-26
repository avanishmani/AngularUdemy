import { Component } from '@angular/core';

@Component({
  selector: 'app-shoping-edit',
  template: `
   <div class="row">
    <div class="col-xs-1">
      <form class="row">
        <div class="row">
          <div class="col-sm-5 form-group">
            <label for="name">Name</label>
            <input type="text" id="name" class="form-control">
          </div>
          <div class="col-sm-12 form-group">
            <label for="amount">Amount</label>
            <input type="number" id="amount" class="form-control">
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <button class="btn btn-success" type="submit">Add</button>
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
export class ShopingEditComponent {

}
