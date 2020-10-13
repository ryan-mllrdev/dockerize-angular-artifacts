import { Component, OnInit } from '@angular/core';
import { ISupplier } from 'src/app/shared/supplier-interface';
import { SuppliersDataService } from 'src/app/core/suppliers-data.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css'],
})
export class SuppliersComponent implements OnInit {
  suppliers: ISupplier[] = [];
  searchText: string;

  constructor(private supplierDataService: SuppliersDataService) {}

  ngOnInit(): void {
    this.supplierDataService
      .getSuppliers()
      .subscribe((suppliers: ISupplier[]) => (this.suppliers = suppliers));
  }
}
