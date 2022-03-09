import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebardesktop',
  templateUrl: './sidebardesktop.component.html',
  styleUrls: ['./sidebardesktop.component.css']
})
export class SidebardesktopComponent implements OnInit {
  showSidebar = window.innerWidth > 1080;
  constructor() {
    window.onresize = () => {
      this.showSidebar = window.innerWidth > 1080;
    };
  }

  ngOnInit(): void {
  }

}
