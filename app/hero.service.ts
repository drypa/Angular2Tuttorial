import {Injectable} from '@angular/core';
import Hero from "./Hero";
import {HEROES} from './mock-heroes';

@Injectable()
export default class HeroService{
  getHeroes(): Array<Hero> {
    return HEROES;
  }
}
