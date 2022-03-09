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

  ToggleSidebar(): void{
    if(this.sidebarActivate) {
      this.sidebarActivate = false;
      console.log(this.sidebarActivate)
    }
    else if(!this.sidebarActivate) {
      this.sidebarActivate = true;
      console.log(this.sidebarActivate)
    }
  }

  hideSidebar(): void{
    this.sidebarActivate = false;
  }

  ngOnInit(): void {
  }
}
