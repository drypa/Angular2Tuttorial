import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Tour of Heroes';

  ngOnInit():void {
  }
}
