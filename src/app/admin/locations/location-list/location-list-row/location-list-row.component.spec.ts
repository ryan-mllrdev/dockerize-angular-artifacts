import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationListRowComponent } from './location-list-row.component';

describe('LocationListRowComponent', () => {
  let component: LocationListRowComponent;
  let fixture: ComponentFixture<LocationListRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationListRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
