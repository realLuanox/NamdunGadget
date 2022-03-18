import {RouterModule, Routes} from "@angular/router";
import {SearchComponent} from "./subDirs/search/search.component";
import {NgModule} from "@angular/core";
import {IndexComponent} from "./subDirs/index/index.component";
import {SearchAlcoholComponent} from "./subDirs/search-alcohol/search-alcohol.component";
import {CalcAlcoholComponent} from "./subDirs/calc-alcohol/calc-alcohol.component";
import {AddAlcoholComponent} from "./subDirs/add-alcohol/add-alcohol.component";
import {AddAlcoholPriceComponent} from "./subDirs/add-alcohol-price/add-alcohol-price.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'calculate',
    component: CalcAlcoholComponent
  },
  {
    path: 'add/alcohol',
    component:AddAlcoholComponent
  },
  {
    path: 'add/price',
    component:AddAlcoholPriceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
