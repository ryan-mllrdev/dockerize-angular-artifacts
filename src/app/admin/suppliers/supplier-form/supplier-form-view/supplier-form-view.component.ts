import { Component, OnInit } from '@angular/core';
import { ISupplier } from 'src/app/shared/supplier-interface';
import { ILocation } from 'src/app/shared/location-interface';
import { ActivatedRoute } from '@angular/router';
import { LocationDataService } from 'src/app/core/locations-data.service';
import { SuppliersDataService } from 'src/app/core/suppliers-data.service';

@Component({
  selector: 'app-supplier-form-view',
  templateUrl: './supplier-form-view.component.html',
  styleUrls: ['./supplier-form-view.component.css'],
})
export class SupplierFormViewComponent implements OnInit {
  supplier: ISupplier;
  location: ILocation;
  locations: ILocation[];

  constructor(
    private route: ActivatedRoute,
    private supplierDataService: SuppliersDataService,
    private locationDataService: LocationDataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.getSupplier(+params.get('id'));
    });

    this.getLocations();
  }

  private getSupplier(id: number) {
    this.supplierDataService.getSupplier(id).subscribe((supplier) => {
      this.supplier = supplier;
      if (!this.supplier) {
        this.initializeDefaults();
        return;
      }

      this.getSupplierLocation(supplier.locationId);
    });
  }

  private getSupplierLocation(locationId: number) {
    this.locationDataService.getLocation(locationId).subscribe((location) => {
      this.location = location;
    });
  }

  private getLocations() {
    this.locationDataService
      .getLocations()
      .subscribe((locations: ISupplier[]) => (this.locations = locations));
  }

  private initializeDefaults() {
    const supplier: ISupplier = {
      id: 0,
      name: '',
      locationId: 0,
      locationName: '',
    };
    this.supplier = {
      ...supplier,
    };
  }
}
