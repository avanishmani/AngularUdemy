import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  template: `
    <button class="btn btn-success" (click)="onStartGame()">Start Game</button>
    <button class="btn btn-danger"(click)="onPauseGame()">Pause Game</button>
  `,
  styles: [
  ]
})
export class GameComponent implements OnInit {
@Output() intervalFind=new EventEmitter<number>();
  interval:number=0;
  lastNumber=1;
constructor(){}
ngOnInit(): void {
    
}

onStartGame(){
  console.log(this.lastNumber);
this.interval=setInterval(()=>{
this.intervalFind.emit(this.lastNumber+1);
this.lastNumber++;
},1000);
}
onPauseGame(){
  clearInterval(this.interval)
}
}
