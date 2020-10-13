import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/shared/product-interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  constructor() {}

  filteredProducts: IProduct[] = [];
  searchText: string;

  @Input() products: IProduct[];

  ngOnInit(): void {}

  getProducts(products: IProduct[]) {
    this.products = products;
  }
}
