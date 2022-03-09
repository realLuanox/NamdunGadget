import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebardesktopComponent } from './sidebardesktop.component';

describe('SidebardesktopComponent', () => {
  let component: SidebardesktopComponent;
  let fixture: ComponentFixture<SidebardesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebardesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebardesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
