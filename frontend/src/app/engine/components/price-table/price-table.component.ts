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
  priceColumns: string[] = ['amount', 'price', 'price per 100ml'];
  ELEMENT_DATA: PeriodicElement[] = [
    {name: '와인하우스', price: 63000, amount: '700', date: "20/03/11"},
    {name: '석진상회', price: 60000, amount: '700', date: "20/04/17"},
    {name: '석진상회', price: 60000, amount: '700', date: "20/04/25"},
    {name: '광천상회', price: 65000, amount: '700', date: "20/04/25"},
    {name: '안성상회', price: 60000, amount: '700', date: "20/04/25"},
    {name: '석진상회', price: 60000, amount: '700', date: " 20/05/08"},
    {name: '롯데마트 송파점', price: 60000, amount: '700', date: "20/05/08"},
  ];

  displayedColumns: string[] = ['demo-name', 'demo-price', 'demo-date'];
  dataSource = this.ELEMENT_DATA;

  constructor() {
  }

  ngOnInit(): void {
  }
}


export interface PeriodicElement {
  name: string;
  price: number;
  amount: string;
  date :string;
}
