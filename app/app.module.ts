import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import HeroDetailComponent from './hero-detail.component'
import HeroesComponent from "./heroes.component";
import DashboardComponent from "./dashboard.component";
import AppRouting from "./app.routing";


@NgModule({
  imports: [BrowserModule, FormsModule, AppRouting],
  declarations: [AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
