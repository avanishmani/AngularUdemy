import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <app-header (featureSelected)="onNavigate($event)"></app-header>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
        <app-recipes *ngIf="loadedFeature==='recipe'"></app-recipes>
        <app-shoping-list *ngIf="loadedFeature==='shopping-list'"></app-shoping-list>
        </div>
      </div>
    </div>

   
     `,
  styles: []
})
export class AppComponent  {
  title = 'ng4-Complete-Guide';
  loadedFeature='recipe';
  onNavigate(path:string){
this.loadedFeature=path;
  }
}
