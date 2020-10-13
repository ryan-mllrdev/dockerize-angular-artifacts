import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsComponent } from './locations.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule } from '@angular/router';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationListRowComponent } from './location-list/location-list-row/location-list-row.component';
import { LocationFormComponent } from './location-form/location-form.component';
import { LocationFormViewComponent } from './location-form/location-form-view/location-form-view.component';
import { LocationsRoutingModule } from './locations-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    LocationsRoutingModule,
  ],
  declarations: [
    LocationsComponent,
    LocationListComponent,
    LocationListRowComponent,
    LocationFormComponent,
    LocationFormViewComponent,
  ],
})
export class LocationsModule {}
