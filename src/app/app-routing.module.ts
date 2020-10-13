import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import(`./admin/products/products.module`).then(
        (products) => products.ProductsModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import(`./admin/products/products.module`).then(
        (products) => products.ProductsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
