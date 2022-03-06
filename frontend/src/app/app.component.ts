import {Component, OnInit} from '@angular/core';
import {ApiService} from "./engine/services/api.service";
import {Alcohol, Whiskey} from "./engine/interfaces/alcohol";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NamdunGadget';
  alcohol: Alcohol | null = null;
  showSidebar = window.innerWidth > 760;

  constructor(private apiService: ApiService) {
    window.onresize = () => {
      this.showSidebar = window.innerWidth > 760;
    };
  }

  search(value: string): void {
    this.apiService.get<Whiskey>(`/api/content/${value}.json`).subscribe(value => {
      this.alcohol = value;
    });
  }

  ngOnInit(): void {
  }
}
