import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from 'src/app/core/product-data.service';
import { SuppliersDataService } from 'src/app/core/suppliers-data.service';
import { IProduct } from 'src/app/shared/product-interface';
import { ISupplier } from 'src/app/shared/supplier-interface';

@Component({
  selector: 'app-product-form-view',
  templateUrl: './product-form-view.component.html',
  styleUrls: ['./product-form-view.component.css'],
})
export class ProductFormViewComponent implements OnInit {
  product: IProduct;
  supplier: ISupplier;
  suppliers: ISupplier[];

  constructor(
    private route: ActivatedRoute,
    private productDataService: ProductDataService,
    private supplierDataService: SuppliersDataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.getProduct(+params.get('id'));
    });

    this.getSuppliers();
  }

  private getProduct(id: number) {
    this.productDataService.getProduct(id).subscribe((product) => {
      this.product = product;
      if (!this.product) {
        this.initializeDefaults();
        return;
      }

      this.getProductSupplier(product.supplierId);
    });
  }

  private getProductSupplier(supplierId: number) {
    this.supplierDataService.getSupplier(supplierId).subscribe((supplier) => {
      this.supplier = supplier;
    });
  }

  private getSuppliers() {
    this.supplierDataService
      .getSuppliers()
      .subscribe((suppliers: ISupplier[]) => (this.suppliers = suppliers));
  }

  private initializeDefaults() {
    const product: IProduct = {
      id: 0,
      name: '',
      sku: '',
      description: '',
      supplierId: 0,
      supplierName: '',
    };
    this.product = {
      ...product,
    };
  }
}
