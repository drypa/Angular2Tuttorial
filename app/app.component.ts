import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  name = 'Angular';
  title = 'Tour of Heroes';
  hero:Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
