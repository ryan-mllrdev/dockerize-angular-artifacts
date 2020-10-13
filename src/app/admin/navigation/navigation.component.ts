import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/core/product-data.service';
import { LocationDataService } from 'src/app/core/locations-data.service';
import { SuppliersDataService } from 'src/app/core/suppliers-data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor(
    private productDataService: ProductDataService,
    private locationDataService: LocationDataService,
    private supplierDataService: SuppliersDataService
  ) {
    this.loadServiceData();
  }

  ngOnInit(): void {}

  private loadServiceData() {
    this.locationDataService.getLocations().subscribe(() => {
      this.supplierDataService.getSuppliers().subscribe(() => {
        this.productDataService.getProducts();
      });
    });
  }
}
