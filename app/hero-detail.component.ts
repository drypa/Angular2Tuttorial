import {Component, Input} from '@angular/core';
import Hero from './Hero';

@Component({
  selector: 'hero-detail',
  templateUrl: 'app/hero-detail.component.html'
})
export default class HeroDetailComponent {
  @Input()
  public hero:Hero;
}
