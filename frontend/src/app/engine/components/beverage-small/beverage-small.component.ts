import {Component, Input, OnInit} from '@angular/core';
import {Alcohol} from "../../interfaces/alcohol";
import {Beverage} from "../../interfaces/beverage";

@Component({
  selector: 'app-beverage-small',
  templateUrl: './beverage-small.component.html',
  styleUrls: ['./beverage-small.component.css']
})
export class BeverageSmallComponent implements OnInit {
  @Input() alcohol: Beverage | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
