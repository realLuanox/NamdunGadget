import {RouterModule, Routes} from "@angular/router";
import {SearchComponent} from "./subDirs/search/search.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
