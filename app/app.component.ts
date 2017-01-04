import { Component } from '@angular/core';
import Hero from "./Hero";
import HeroService from "./hero.service";


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [HeroService]
})
export class AppComponent {
  heroes: Array<Hero>;
  constructor(private heroService:HeroService){
    this.heroes = this.heroService.getHeroes();
    this.selectedHero = this.heroes[0];
  }
  name = 'Angular';
  title = 'Tour of Heroes';
  selectedHero:Hero;
  onSelect = (hero:Hero)=> {
    this.selectedHero = hero;
    console.log(hero.name);
  }
}
