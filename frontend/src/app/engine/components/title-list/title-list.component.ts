import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.css']
})
export class TitleListComponent implements OnInit {
  @Input() titleList: {name: string; price: number|null}[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
