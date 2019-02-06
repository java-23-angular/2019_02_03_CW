import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MyFormComponent} from './my-form.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { MyRowComponent } from './my-row/my-row.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    MyCompComponent,
    MyRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
