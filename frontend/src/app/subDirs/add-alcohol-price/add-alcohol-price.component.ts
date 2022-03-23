import { Component, OnInit } from '@angular/core';
import {Alcohol} from "../../engine/interfaces/alcohol";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../engine/services/api.service";

@Component({
  selector: 'app-add-alcohol-price',
  templateUrl: './add-alcohol-price.component.html',
  styleUrls: ['./add-alcohol-price.component.css']
})
export class AddAlcoholPriceComponent implements OnInit {

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
    this.apiService.get<Alcohol>(`/api/content/${value}.json`).subscribe(value => {
      this.alcohol = value;
    });
  }
}
