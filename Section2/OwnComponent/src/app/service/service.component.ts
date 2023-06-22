import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  template:`
  <div>
    <h2>Hello Avanish You Are in Service Component !</h2>
    <h2>Thanku For Coming !</h2>
    <button  class="btn btn-primary" [hidden]="isButtonHidden">Submit</button>
    <!-- <label for="check"> Enter your Server Name</label>
    <input type="text" [title]=> -->
    <p [innerText]="title"></p>
  </div>`,
})
export class ServiceComponent {
title:"Service Component";
isButtonHidden=false

constructor(){
  setTimeout(() => {
    this.isButtonHidden=true;
    
    }, 2000);
}
ngOnInit(){
 
}
}
