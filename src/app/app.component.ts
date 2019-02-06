import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arr: Array<{name:string,lastName:string}> = [];

  onClick(obj: { name: string }): void {
    console.log('Clicked' + obj.name);
  }

  addRow(row: {name:string,lastName:string}): void {
    this.arr.push(row);
  }

  changeArr() {
    this.arr[0].name = 'Super name';
  }
}
