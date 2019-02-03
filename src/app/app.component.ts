import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Java23190203CW';

  onClick(obj:{name:string}): void{
    console.log("Clicked" + obj);
  }
}
