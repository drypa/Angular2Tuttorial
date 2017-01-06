import {Injectable} from '@angular/core';
import Hero from "./Hero";
import {HEROES} from './mock-heroes';

@Injectable()
export default class HeroService {
  getHeroes():Promise<Array<Hero>> {
    return new Promise<Array<Hero>>((resolve)=> {
      resolve(HEROES)
    });
  }

  getHero(id:number):Promise<Hero> {
    return this.getHeroes().then((heroes)=> heroes.find(x=> x.id == id));
  }
}
