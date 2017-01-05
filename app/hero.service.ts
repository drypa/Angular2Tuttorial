import {Injectable} from '@angular/core';
import Hero from "./Hero";
import {HEROES} from './mock-heroes';

@Injectable()
export default class HeroService {
  getHeroes():Array<Hero> {
    return HEROES;
  }

  getHeroesSlow():Promise<Array<Hero>> {
    return new Promise<Array<Hero>>((resolve)=> {
      setTimeout(()=> {
        resolve(HEROES)
      }, 2000);
    });
  }
}
