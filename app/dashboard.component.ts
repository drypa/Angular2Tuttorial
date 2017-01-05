import { Component, OnInit } from '@angular/core';
import HeroService from "./hero.service";
import Hero from "./Hero";

@Component({
  selector: 'dashboard',
  templateUrl: 'app/dashboard.component.html',
  providers: [HeroService]
})
export default class DashboardComponent implements OnInit{
  constructor(private heroService:HeroService) {
  }

  heroes:Array<Hero> = [];
  ngOnInit():void {
    this.heroService.getHeroesSlow().then((heroes)=> {
      this.heroes = heroes;
    });
  }
}
