import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductDataService } from 'src/app/core/product-data.service';
import { IProduct } from 'src/app/shared/product-interface';

@Component({
  selector: 'app-product-list-row',
  templateUrl: './product-list-row.component.html',
  styleUrls: ['./product-list-row.component.css'],
})
export class ProductListRowComponent implements OnInit {
  @Input() product: IProduct;

  @Output() productsUpdated: EventEmitter<IProduct[]> = new EventEmitter();

  constructor(private productDataService: ProductDataService) {}

  ngOnInit(): void {}

  confirmDelete(id: number) {
    this.productDataService.getProduct(id).subscribe((product) => {
      if (product) {
        if (confirm(`Do you really wish to delete ${product.name}`)) {
          this.productDataService.deleteProduct(id);
          this.reload();
        }
      }
    });
  }

  private reload() {
    this.productDataService.getProducts().subscribe((products) => {
      this.productsUpdated.emit(products);
    });
  }
}
