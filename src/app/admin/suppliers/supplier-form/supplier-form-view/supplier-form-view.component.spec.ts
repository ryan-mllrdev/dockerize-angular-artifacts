import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierFormViewComponent } from './supplier-form-view.component';

describe('SupplierFormViewComponent', () => {
  let component: SupplierFormViewComponent;
  let fixture: ComponentFixture<SupplierFormViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierFormViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
