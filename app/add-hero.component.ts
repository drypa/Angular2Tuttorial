import {Component, EventEmitter, Output} from '@angular/core'
import HeroService from "./hero.service";


@Component({
  selector: 'add-hero',
  templateUrl: 'app/add-hero.component.html'
})
export default class AddHeroComponent {
  protected heroName:string='';
  constructor(private heroService:HeroService) {
  }
  @Output()
  onAdded = new EventEmitter<boolean>();

  add(){
    this.heroService.create(this.heroName).then(()=>this.onSuccessAdded()).catch(()=>this.onFailure());
  }

  onSuccessAdded():void{
    this.heroName='';
    this.onAdded.emit(true);
  }

  onFailure():void{
    this.onAdded.emit(false);
  }
}
