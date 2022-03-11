import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAlcoholComponent } from './search-alcohol.component';

describe('SearchAlcoholComponent', () => {
  let component: SearchAlcoholComponent;
  let fixture: ComponentFixture<SearchAlcoholComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAlcoholComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAlcoholComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
