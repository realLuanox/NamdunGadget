import {Component, OnInit} from '@angular/core';
import {ApiService} from "./engine/services/api.service";
import {Alcohol, Whiskey} from "./engine/interfaces/alcohol";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NamdunGadget';
  showSidebar = window.innerWidth > 1300;

  constructor() {
    window.onresize = () => {
      this.showSidebar = window.innerWidth > 1300;
    };
  }


  ngOnInit(): void {
  }
}
