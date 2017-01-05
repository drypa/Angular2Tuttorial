import { Component, OnInit } from '@angular/core';
import Hero from "./Hero";
import HeroService from "./hero.service";


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  heroes:Array<Hero>;

  constructor(private heroService:HeroService) {
  }

  name = 'Angular';
  title = 'Tour of Heroes';
  selectedHero:Hero;
  onSelect = (hero:Hero)=> {
    this.selectedHero = hero;
    console.log(hero.name);
  };

  ngOnInit():void {
    this.heroService.getHeroesSlow().then((heroes)=> {
      this.heroes = heroes;
      this.selectedHero = this.heroes[0];
    });
  }
}
