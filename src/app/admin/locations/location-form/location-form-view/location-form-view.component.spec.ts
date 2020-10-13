import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationFormViewComponent } from './location-form-view.component';

describe('LocationFormViewComponent', () => {
  let component: LocationFormViewComponent;
  let fixture: ComponentFixture<LocationFormViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationFormViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
