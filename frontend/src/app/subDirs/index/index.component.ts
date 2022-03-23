import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../engine/services/api.service";
import {Alcohol} from "../../engine/interfaces/alcohol";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  beverages: Alcohol[] = [];
  titles: {name: string; price: number|null }[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.get<Alcohol[]>('/api/list2.json').subscribe(value => {
      this.beverages = value;
      this.titles = this.beverages.map(v => {
        return { name: v.name, price: v.degree };
      });
    });
  }

  ngOnInit(): void {
  }

}
