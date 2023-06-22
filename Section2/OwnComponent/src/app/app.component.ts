import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:` <div>
    <h1>Inside The  {{title}} Component </h1>
    <hr>
    
  </div>
  <app-service></app-service>`
})
export class AppComponent {
  title = 'OwnComponent';
  server='';
}
