import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ProductDataService } from 'src/app/core/product-data.service';
import { IProduct } from 'src/app/shared/product-interface';
import { ISupplier } from 'src/app/shared/supplier-interface';
import { ToasterNotificationService } from 'src/app/shared/toaster-notification.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit, OnDestroy {
  productForm: FormGroup;
  changesApplied = false;
  originalProductValue: IProduct;

  @Input() product: IProduct;
  @Input() supplier: ISupplier;
  @Input() suppliers: ISupplier;

  constructor(
    private formBuilder: FormBuilder,
    private productDataService: ProductDataService,
    private toasterNotificationService: ToasterNotificationService
  ) {}

  ngOnInit(): void {
    this.originalProductValue = {
      ...this.product,
    };

    this.productForm = this.formBuilder.group({
      id: new FormControl(this.product?.id, [Validators.required]),
      sku: new FormControl(this.product?.sku, [Validators.required]),
      name: new FormControl(this.product?.name, [Validators.required]),
      description: new FormControl(this.product?.description, [
        Validators.required,
      ]),
      supplier: new FormControl(this.product?.supplierName, [
        Validators.required,
      ]),
    });
  }

  ngOnDestroy(): void {
    if (!this.changesApplied) {
      this.productDataService.updateProduct(this.originalProductValue);
    }
  }

  changeSupplier(changeEvent) {
    const selectedSupplier: ISupplier = changeEvent.target.value as ISupplier;
    this.supplier = selectedSupplier;
  }

  saveProduct() {
    this.changesApplied = true;

    this.product.supplierId = this.supplier.id;
    this.product.supplierName = this.supplier.name;

    if (!this.product.id) {
      this.productDataService.addProduct(this.product);

      this.productForm.reset(this.originalProductValue);

      this.toasterNotificationService.showSuccess(
        'New product successfully created',
        ''
      );
    } else {
      const product: IProduct = {
        ...this.product,
      };

      this.productDataService.updateProduct(product);

      this.toasterNotificationService.showSuccess(
        'Product successfully updated',
        ''
      );
    }
  }
}
