import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {HeroDetailComponent} from './hero-detail.component'
import HeroesComponent from "./heroes.component";
import {RouterModule} from '@angular/router'

let routes =
  RouterModule.forRoot([
    {
      path: 'heroes',
      component: HeroesComponent
    }
  ]);

@NgModule({
  imports: [BrowserModule, FormsModule, routes],
  declarations: [AppComponent, HeroDetailComponent, HeroesComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
