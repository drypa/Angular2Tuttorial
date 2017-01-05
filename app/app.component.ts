import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {

  title = 'Tour of Heroes';

  ngOnInit():void {
  }
}
