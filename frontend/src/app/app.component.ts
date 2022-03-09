import {Component, OnInit} from '@angular/core';
import {ApiService} from "./engine/services/api.service";
import {Alcohol, Whiskey} from "./engine/interfaces/alcohol";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public sidebarActivate = false;
  desktop = window.innerWidth > 1080;
  mobile = window.innerWidth < 1080;
  constructor() {

  }

  showSidebar(): void{
    this.sidebarActivate = true;
  }

  hideSidebar(): void{
    this.sidebarActivate = false;
  }

  ngOnInit(): void {
  }
}
