import { Component, OnInit } from '@angular/core';
import {Alcohol, Whiskey} from "../../engine/interfaces/alcohol";
import {ApiService} from "../../engine/services/api.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  alcohol: Alcohol | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }


  search(value: string): void {
    this.apiService.get<Whiskey>(`/api/content/${value}.json`).subscribe(value => {
      this.alcohol = value;
    });
  }
}
