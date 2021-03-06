import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';
import HeroDetailComponent from './hero-detail.component'
import HeroesComponent from "./heroes.component";
import DashboardComponent from "./dashboard.component";
import AppRouting from "./app.routing";
import InMemoryDataService from "./in-memory-data.service";
import HeroService from "./hero.service";
import AddHeroComponent from "./add-hero.component";
import HeroSearchService from "./hero-search.service";
import HeroSearchComponent from "./hero-search.component";
import ModalDialogComponent from "./modal-dialog.component";


@NgModule({
  imports: [BrowserModule, FormsModule, AppRouting, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService)],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    AddHeroComponent,
    HeroSearchComponent,
    ModalDialogComponent
  ],
  providers: [HeroService, HeroSearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
