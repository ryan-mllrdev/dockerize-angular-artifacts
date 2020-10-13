import { Component, OnInit, Input } from '@angular/core';
import { ISupplier } from 'src/app/shared/supplier-interface';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.css'],
})
export class SuppliersListComponent implements OnInit {
  searchText: string;

  constructor() {}

  @Input() suppliers: ISupplier[];

  ngOnInit(): void {}

  getSuppliers(suppliers: ISupplier[]) {
    this.suppliers = suppliers;
  }
}
