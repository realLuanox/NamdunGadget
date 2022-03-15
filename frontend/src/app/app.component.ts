import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {MatDrawerMode} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Output() redirect = new EventEmitter<any>();

  public sidebarActivate: boolean = false;
  public shared: boolean = false;
  public title: string = 'hello';
  public sidebarMode: MatDrawerMode = "side";

  hasBackdrop: boolean = window.innerWidth < 720;
  desktop = window.innerWidth > 1280;
  top = '64px';

  constructor() {
    window.onload = () => {
      this.SetLayout()
      this.ChangeNavTop()
    }
    window.onresize = () => {
      this.SetLayout()
    }
  }

  SetLayout(): void {
    if (window.innerWidth > 720) {
      this.desktop = false;
      this.hasBackdrop = false;
      this.sidebarMode = "side";
      if (window.innerWidth > 1280) {
        this.desktop = true;
        this.sidebarActivate = true;
      }
    } else {
      this.ChangeNavTop();
      this.hasBackdrop = true;
      this.desktop = false;
      this.sidebarActivate = false;
      this.sidebarMode = "over";
    }
  }

  ToggleSidebar(): void {
    if (this.sidebarActivate) {
      this.sidebarActivate = false;
    } else if (!this.sidebarActivate) {
      this.sidebarActivate = true;
    }
  }

  ChangeNavTop() {
    if (window.innerWidth > 600) {
      this.top = '64px';
      console.log(this.top);
    } else {
      this.top = '56px';
      console.log(this.top);
    }
    return this.top;
  }

  hello(something: string): void {
    console.log(something);
    this.title = 'world';
  }

  ngOnInit(): void {
  }
}
