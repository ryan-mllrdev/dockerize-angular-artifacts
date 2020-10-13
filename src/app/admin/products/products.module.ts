import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProductListRowComponent } from './product-list/product-list-row/product-list-row.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductFormViewComponent } from './product-form/product-form-view/product-form-view.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    ProductsRoutingModule,
  ],
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductListRowComponent,
    ProductFormComponent,
    ProductFormViewComponent,
  ],
  exports: [ProductsComponent],
})
export class ProductsModule {}
