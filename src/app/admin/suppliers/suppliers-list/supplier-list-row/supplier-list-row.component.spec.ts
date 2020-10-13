import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierListRowComponent } from './supplier-list-row.component';

describe('SupplierListRowComponent', () => {
  let component: SupplierListRowComponent;
  let fixture: ComponentFixture<SupplierListRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierListRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
