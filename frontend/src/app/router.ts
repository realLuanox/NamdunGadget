import {RouterModule, Routes} from "@angular/router";
import {SearchComponent} from "./subDirs/search/search.component";
import {NgModule} from "@angular/core";
import {IndexComponent} from "./subDirs/index/index.component";
import {SearchAlcoholComponent} from "./subDirs/search-alcohol/search-alcohol.component";

const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: '',
    component:IndexComponent
  },
  {
    path: 'search/alcohol',
    component:SearchAlcoholComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
