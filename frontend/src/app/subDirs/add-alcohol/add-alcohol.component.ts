import { Component, OnInit } from '@angular/core';
import {Alcohol} from "../../engine/interfaces/alcohol";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../engine/services/api.service";

@Component({
  selector: 'app-add-alcohol',
  templateUrl: './add-alcohol.component.html',
  styleUrls: ['./add-alcohol.component.css']
})

export class AddAlcoholComponent implements OnInit {
  alcohol: Alcohol | null = null;
  alcoholCategory: string[] = [
    '위스키',
    '데킬라',
    '보드카',
    '럼',
    '리큐르',
    '사케',
    '진',
    '중국술',
    '미니어처',
    '기타',
  ];

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

