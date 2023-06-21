import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>Hello Angular Lover's Avanish This Side !</h1>
    <h2>{{title}}</h2>
  </div>
  `
})
export class AppComponent {
  title = 'my-project';
}
