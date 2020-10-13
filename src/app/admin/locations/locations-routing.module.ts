import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationsComponent } from './locations.component';
import { LocationFormViewComponent } from './location-form/location-form-view/location-form-view.component';

const routes: Routes = [
  {
    path: '',
    component: LocationsComponent,
  },
  {
    path: 'create',
    component: LocationFormViewComponent,
  },
  {
    path: 'edit/:id',
    component: LocationFormViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationsRoutingModule {}
