import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { HeaderComponent } from './header/header.component';
import {AppRouter} from "./app.router";

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
