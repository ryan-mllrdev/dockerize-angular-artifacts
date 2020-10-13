import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import(`../products/products.module`).then(
        (products) => products.ProductsModule
      ),
  },
  {
    path: 'suppliers',
    loadChildren: () =>
      import(`../suppliers/suppliers.module`).then(
        (products) => products.SuppliersModule
      ),
  },
  {
    path: 'locations',
    loadChildren: () =>
      import(`../locations/locations.module`).then(
        (products) => products.LocationsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigationRoutingModule {}
