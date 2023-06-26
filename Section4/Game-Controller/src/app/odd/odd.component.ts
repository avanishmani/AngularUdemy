import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  template: `
    <p>
      Odd={{number}}
    </p>
  `,
  styles: [
  ]
})
export class OddComponent implements OnInit {
@Input() number:number=0;
constructor(){};
ngOnInit(): void {
    
}
}
