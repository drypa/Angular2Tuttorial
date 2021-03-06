import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import Hero from "./Hero";

@Injectable()
export default class HeroSearchService {
  constructor(private http:Http) {
  }

  search(term:string):Observable<Hero[]> {
    return this.http.get(`app/heroes/?name=${term}`).map((r:Response)=>r.json().data as Hero[]);
  }
}
