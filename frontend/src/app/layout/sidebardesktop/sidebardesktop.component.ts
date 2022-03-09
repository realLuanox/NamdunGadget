import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebardesktop',
  templateUrl: './sidebardesktop.component.html',
  styleUrls: ['./sidebardesktop.component.css']
})
export class SidebardesktopComponent implements OnInit {
  ShowSidebar = false;
  constructor() {
  }

  ngOnInit(): void {
  }

}
