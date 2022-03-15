import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Alcohol, Whiskey} from "../../engine/interfaces/alcohol";
import {ApiService} from "../../engine/services/api.service";

@Component({
  selector: 'app-add-alcohol',
  templateUrl: './add-alcohol.component.html',
  styleUrls: ['./add-alcohol.component.css']
})

export class AddAlcoholComponent implements OnInit {
  alcohol: Alcohol | null = null;

  isLinear = false;
  firstFormGroup: FormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder,
              private apiService: ApiService) {
  }

  ngOnInit() {
  }

  search(value: string): void {
    this.apiService.get<Whiskey>(`/api/content/${value}.json`).subscribe(value => {
      this.alcohol = value;
    });
  }
}

