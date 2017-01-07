import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'
import {Location} from '@angular/common'
import Hero from './Hero';
import HeroService from "./hero.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls: ['app/hero-detail.component.css'],
  providers: [HeroService]
})
export default class HeroDetailComponent implements OnInit {
  private hero:Hero;

  constructor(private heroService:HeroService,
              private route:ActivatedRoute,
              private location:Location) {
  }

  goBack() {
    this.location.back();
  }

  ngOnInit():void {
    this.route.params.switchMap((param:Params) =>  this.heroService.getHero(+param['id'])).subscribe(x=> this.hero = x);
  }
}
