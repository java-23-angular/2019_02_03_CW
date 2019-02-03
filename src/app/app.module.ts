import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MyFormComponent} from './my-form.component';
import { MyCompComponent } from './my-comp/my-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    MyCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
