import {Component, Input, OnInit} from '@angular/core';
import {StorePrice} from "../../interfaces/alcohol";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.css']
})

export class PriceTableComponent implements OnInit {
  @Input() price = [] as StorePrice[];
  priceSource = new MatTableDataSource<StorePrice>(this.price)
  small = window.innerWidth < 500;
  priceColumns: string[] = this.small ? ['amount', 'price per 100ml'] :  ['amount', 'price', 'price per 100ml'];
  displayedColumns: string[] = this.small ? ['demo-name', 'demo-date'] : ['demo-name', 'demo-price', 'demo-date'];

  constructor() {
  }
  ngOnInit(): void {
    this.priceSource.data = this.price;
  }
}
