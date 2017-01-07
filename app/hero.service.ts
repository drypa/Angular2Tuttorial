import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import Hero from "./Hero";
import 'rxjs/add/operator/toPromise';

@Injectable()
export default class HeroService {
  constructor(private http:Http) {

  }

  private heroesUrl = 'api/heroes';  // URL to web api
  getHeroes():Promise<Array<Hero>> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(resp => resp.json().data as Hero[])
      .catch(this.handleError);
  }

  private handleError(error:any) {
    return Promise.reject(error.message || error);
  }

  getHero(id:number):Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url).toPromise().then(resp => resp.json().data as Hero).catch(this.handleError)
  }
}
