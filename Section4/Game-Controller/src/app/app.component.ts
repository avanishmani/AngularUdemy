import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="row">
      <div class="col-xs-12">
        <app-game (intervalFind)="onintervalFind($event)"></app-game>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <app-odd *ngFor="let od of oddNumber" [number]="od"]></app-odd>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <app-even *ngFor="let ev of evenNumber" [number]="ev"]></app-even>
      </div>
    </div>
    
  `,
  styles: []
})
export class AppComponent {
  oddNumber:number[]=[];
  evenNumber:number[]=[];
  title = 'Game-Controller';
  onintervalFind(FiredNumber:number){
    // console.log(FiredNumber);
    if(FiredNumber%2==0){
      this.evenNumber.push(FiredNumber);
    }else{
      this.oddNumber.push(FiredNumber);
    }

  }
}
