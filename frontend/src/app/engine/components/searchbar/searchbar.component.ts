import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @Output() searched = new EventEmitter<string>();
  public searchList = [] as {
    name: string,
    englishName: string
  }[];

  myControl = new FormControl();
  filteredOptions: Observable<{
    name: string,
    englishName: string
  }[]>;


  constructor(private readonly apiService: ApiService) {
    this.apiService.get<{
      name: string,
      englishName: string
    }[]>('/api/list.json').subscribe(value => {
      this.searchList = value;
      console.log(this.searchList);
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  ngOnInit(): void {
  }

  private _filter(value: string): {
    name: string,
    englishName: string
  }[] {
    const filterValue = value.toLowerCase();
    return this.searchList.filter((value) => {
      return value.name.includes(filterValue) || value.englishName.toLowerCase().startsWith(filterValue);
    });
  }

  search(value: string): void {
    this.searched.emit(value);
  }
}
