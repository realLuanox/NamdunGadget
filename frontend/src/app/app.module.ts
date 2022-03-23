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
import { IndexComponent } from './subDirs/index/index.component';
import { AddAlcoholComponent } from './subDirs/add-alcohol/add-alcohol.component';
import { SearchAlcoholComponent } from './subDirs/search-alcohol/search-alcohol.component';
import { CalcAlcoholComponent } from './subDirs/calc-alcohol/calc-alcohol.component';
import {MatTableModule} from "@angular/material/table";
import { AlcoholComponent } from './subDirs/alcohol/alcohol.component';
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";
import {MatStepperModule} from "@angular/material/stepper";
import {MatRippleModule} from "@angular/material/core";
import { AddAlcoholPriceComponent } from './subDirs/add-alcohol-price/add-alcohol-price.component';
import {MaterialFileInputModule} from "ngx-material-file-input";
import { ButtonComponent } from './engine/components/button/button.component';
import { BeverageSmallComponent } from './engine/components/beverage-small/beverage-small.component';
import { TitleListComponent } from './engine/components/title-list/title-list.component';
import {MatChipsModule} from "@angular/material/chips";

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
    IndexComponent,
    AddAlcoholComponent,
    SearchAlcoholComponent,
    CalcAlcoholComponent,
    AlcoholComponent,
    AddAlcoholPriceComponent,
    ButtonComponent,
    BeverageSmallComponent,
    TitleListComponent,
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
    MatSelectModule,
    MatTableModule,
    MatListModule,
    MatTabsModule,
    MatStepperModule,
    MatRippleModule,
    MaterialFileInputModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
