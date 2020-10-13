import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersComponent } from './suppliers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule } from '@angular/router';
import { SuppliersListComponent } from './suppliers-list/suppliers-list.component';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';
import { SupplierListRowComponent } from './suppliers-list/supplier-list-row/supplier-list-row.component';
import { SupplierFormViewComponent } from './supplier-form/supplier-form-view/supplier-form-view.component';
import { SuppliersRoutingModule } from './suppliers-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    SuppliersRoutingModule,
  ],
  declarations: [
    SuppliersComponent,
    SuppliersListComponent,
    SupplierFormComponent,
    SupplierListRowComponent,
    SupplierFormViewComponent,
  ],
})
export class SuppliersModule {}
