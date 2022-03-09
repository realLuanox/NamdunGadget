import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  @Input() SidebarActivate = false;
  @Output() hideSidebar = new EventEmitter<any>();


  constructor() {
  }

  ngOnInit(): void {
  }
}
