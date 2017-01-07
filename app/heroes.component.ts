import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Hero from "./Hero";
import HeroService from "./hero.service";

@Component({
  selector: 'heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
  providers: [HeroService]
})
export default class HeroesComponent implements OnInit {
  constructor(private heroService:HeroService, private router:Router) {
  }

  heroes:Array<Hero> = [];
  selectedHero:Hero;
  onSelect(hero:Hero):void {
    this.selectedHero = hero;
    console.log(hero.name);
  }

  gotoDetail():void{
    this.router.navigate(['/detail', this.selectedHero.id])
  }

  ngOnInit():void {
    this.heroService.getHeroes().then((heroes)=> {
      this.heroes = heroes;
      this.selectedHero = this.heroes[0];
    });
  }
}
