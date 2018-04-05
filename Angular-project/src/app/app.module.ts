import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { HeaderComponent } from './header/header.component';
import {AppRouter} from "./app.router";
import {FormsModule} from "@angular/forms";
import {ChartsModule} from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRouter,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
