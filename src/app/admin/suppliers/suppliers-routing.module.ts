import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuppliersComponent } from './suppliers.component';
import { SupplierFormViewComponent } from './supplier-form/supplier-form-view/supplier-form-view.component';

const routes: Routes = [
  {
    path: '',
    component: SuppliersComponent,
  },
  {
    path: 'create',
    component: SupplierFormViewComponent,
  },
  {
    path: 'edit/:id',
    component: SupplierFormViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuppliersRoutingModule {}
