import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SuppliersDataService } from './suppliers-data.service';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../shared/product-interface';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  baseUrl = 'assets/';
  products: Record<number, IProduct> = {};

  /**
   *
   */
  constructor(
    private http: HttpClient,
    private supplierDataService: SuppliersDataService
  ) {}

  getProducts(): Observable<IProduct[]> {
    // Check if data are already loaded
    if (this.products && Object.keys(this.products).length) {
      return of(Array.from(Object.values(this.products)));
    }

    // If data are not loaded, get it from products.json
    return this.http.get<IProduct[]>(this.baseUrl + 'products.json').pipe(
      map((products) => {
        products.forEach((product) => {
          // Get the supplier name and assign it to the product matching the supplierId
          this.supplierDataService
            .getSupplierName(product.supplierId)
            .subscribe((name: string) => {
              product.supplierName = name;

              // Store each product item to a dictionary for future reference and easy access
              this.products[product.id] = product;
            });
        });
        return products;
      })
    );
  }

  getProduct(id: number): Observable<IProduct> {
    if (!Object.keys(this.products).length) {
      return;
    }

    return of(this.products[id]);
  }

  addProduct(newProduct: IProduct) {
    if (newProduct) {
      newProduct.id = this.createId();
      const product = {
        ...newProduct,
      };
      this.products[newProduct.id] = product;
    }
  }

  updateProduct(product: IProduct) {
    if (product) {
      this.products[product.id] = product;
    }
  }

  deleteProduct(productId: number) {
    if (productId) {
      delete this.products[productId];
    }
  }

  private createId(): number {
    const productValues: IProduct[] = Object.values(this.products);

    const maxId: number = Math.max.apply(
      Math,
      productValues.map((product) => {
        return product.id;
      })
    );

    return maxId + 1;
  }
}
