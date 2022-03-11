import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {AlcoholSmallComponent} from "./engine/components/alcohol-small/alcohol-small.component";
import {MatCardModule} from "@angular/material/card";
import {SearchbarComponent} from './engine/components/searchbar/searchbar.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {SearchComponent} from './subDirs/search/search.component';
import {RoutingModule} from "./router";
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import { PriceTableComponent } from './engine/components/price-table/price-table.component';
import { ChipsComponent } from './engine/components/chips/chips.component';

@NgModule({
  declarations: [
    AppComponent,
    AlcoholSmallComponent,
    SearchbarComponent,
    SearchComponent,
    FooterComponent,
    NavbarComponent,
    PriceTableComponent,
    ChipsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    MatCardModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    RouterModule,
    RoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
