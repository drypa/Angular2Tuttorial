import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Observable} from 'rxjs'
import Hero from "./Hero";


@Injectable()
export default class HeroSearchService {
  constructor(private http:Http) {
  }
  search(term:string):Observable<Hero>{

  }
}
