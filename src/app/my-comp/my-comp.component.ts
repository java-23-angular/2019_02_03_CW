import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent {
  @Output('myEvent') myEventEmitter: EventEmitter<{name:string}> = new EventEmitter();

  clicked() {
    this.myEventEmitter.emit({name:'Vasya'});
  }
}
