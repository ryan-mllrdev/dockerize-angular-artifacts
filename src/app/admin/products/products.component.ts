import { Component, OnInit } from '@angular/core';

import { IProduct } from 'src/app/shared/product-interface';
import { ProductDataService } from 'src/app/core/product-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productDataService: ProductDataService) {}

  ngOnInit(): void {
    this.productDataService
      .getProducts()
      .subscribe((products: IProduct[]) => (this.products = products));
  }
}
