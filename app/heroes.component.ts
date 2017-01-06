import { Component, OnInit } from '@angular/core';
import Hero from "./Hero";
import HeroService from "./hero.service";

@Component({
  selector: 'heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
  providers: [HeroService]
})
export default class HeroesComponent implements OnInit {
  constructor(private heroService:HeroService) {
  }

  heroes:Array<Hero> = [];
  selectedHero:Hero;
  onSelect = (hero:Hero)=> {
    this.selectedHero = hero;
    console.log(hero.name);
  };

  ngOnInit():void {
    this.heroService.getHeroes().then((heroes)=> {
      this.heroes = heroes;
      this.selectedHero = this.heroes[0];
    });
  }
}
