import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  template: `
    <p>
      Even={{number}}
    </p>
  `,
  styles: [
  ]
})
export class EvenComponent implements OnInit {
  @Input() number:number=0;
  constructor(){};
  ngOnInit(): void {
      
  }
}
