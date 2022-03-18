import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcAlcoholComponent } from './calc-alcohol.component';

describe('CalcAlcoholComponent', () => {
  let component: CalcAlcoholComponent;
  let fixture: ComponentFixture<CalcAlcoholComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcAlcoholComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcAlcoholComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
