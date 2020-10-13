import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SuppliersDataService } from 'src/app/core/suppliers-data.service';
import { ISupplier } from 'src/app/shared/supplier-interface';

@Component({
  selector: 'app-supplier-list-row',
  templateUrl: './supplier-list-row.component.html',
  styleUrls: ['./supplier-list-row.component.css'],
})
export class SupplierListRowComponent implements OnInit {
  constructor(private supplierDataService: SuppliersDataService) {}

  @Input() supplier: ISupplier;

  @Output() suppliersUpdated: EventEmitter<ISupplier[]> = new EventEmitter();

  ngOnInit(): void {}

  confirmDelete(id: number) {
    this.supplierDataService.getSupplier(id).subscribe((supplier) => {
      if (supplier) {
        if (confirm(`Do you really wish to delete ${supplier.name}`)) {
          this.supplierDataService.deleteSupplier(id);
          this.reload();
        }
      }
    });
  }

  private reload() {
    this.supplierDataService.getSuppliers().subscribe((suppliers) => {
      this.suppliersUpdated.emit(suppliers);
    });
  }
}
