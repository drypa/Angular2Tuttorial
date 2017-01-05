import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import HeroDetailComponent from './hero-detail.component'
import HeroesComponent from "./heroes.component";
import {RouterModule} from '@angular/router'
import DashboardComponent from "./dashboard.component";

let routes =
  RouterModule.forRoot([
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },
    {
      path: 'heroes',
      component: HeroesComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    }
  ]);

@NgModule({
  imports: [BrowserModule, FormsModule, routes],
  declarations: [AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
