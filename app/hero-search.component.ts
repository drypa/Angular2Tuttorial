import {Component, OnInit} from '@angular/core';
import HeroSearchService from "./hero-search.service";
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Rx';
import { Subject }           from 'rxjs/Rx';
import Hero from "./Hero";

@Component({
  selector: 'hero-search',
  templateUrl: 'app/hero-search.component.html',
  styleUrls: ['app/hero-search.component.css'],
  providers: [HeroSearchService]
})
export default class HeroSearchComponent implements OnInit {
  heroes:Observable<Hero[]>;
  private searchTerm = new Subject<string>();

  constructor(private heroSearch:HeroSearchService, private router:Router) {
  }

  search(term:string) {
    this.searchTerm.next(term);
  }

  ngOnInit():void {
    this.heroes = this.searchTerm.debounceTime(300).distinctUntilChanged().switchMap((term:string)=>
      term ? this.heroSearch.search(term) : Observable.of<Hero[]>([])).catch(error => {
      console.log(error);
      return Observable.of<Hero[]>([]);
    });
  }

  heroDetail(hero:Hero):void{
    this.router.navigate(['/detail',hero.id])
  }
}
