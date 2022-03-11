import {Component, OnInit} from '@angular/core';
import {MatDrawerMode} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public sidebarActivate: boolean = false;
  public shared: boolean = false;
  public title: string = 'hello';
  public mode: MatDrawerMode = "over";

  hasBackdrop: boolean = window.innerWidth < 768;
  desktop = window.innerWidth > 1280;

  constructor() {
    window.onresize = () => {
      if (window.innerWidth > 768) {
      this.desktop = false;
        if (window.innerWidth > 1280) {
          this.desktop = true;
          this.sidebarActivate = true;
        }

        this.hasBackdrop = false;
        this.mode = "side";
      } else {
        this.hasBackdrop = true;
        this.desktop = false;
        this.sidebarActivate = false;
        this.mode = "over";
      }
    }
  }

  ToggleSidebar(): void {
    if (this.sidebarActivate) {
      this.sidebarActivate = false;
    } else if (!this.sidebarActivate) {
      this.sidebarActivate = true;
    }
  }

  hello(something: string): void {
    console.log(something);
    this.title = 'world';
  }

  ngOnInit(): void {
  }
}
