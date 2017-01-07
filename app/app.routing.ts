import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import HeroesComponent from "./heroes.component";
import DashboardComponent from "./dashboard.component";
import HeroDetailComponent from "./hero-detail.component";
import {Router} from "~express/lib/router/index";

let routes =
  RouterModule.forRoot([
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },
    {
      path: 'heroes',
      component: HeroesComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'detail/:id',
      component: HeroDetailComponent
    }
  ]);

@NgModule({
  imports: [routes],
  exports: [RouterModule]
})
export default class AppRouting {
}
