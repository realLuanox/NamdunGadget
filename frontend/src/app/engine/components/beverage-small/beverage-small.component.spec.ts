import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeverageSmallComponent } from './beverage-small.component';

describe('BeverageSmallComponent', () => {
  let component: BeverageSmallComponent;
  let fixture: ComponentFixture<BeverageSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeverageSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeverageSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
