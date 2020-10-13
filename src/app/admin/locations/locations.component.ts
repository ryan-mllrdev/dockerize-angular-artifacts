import { Component, OnInit } from '@angular/core';
import { ILocation } from 'src/app/shared/location-interface';
import { LocationDataService } from 'src/app/core/locations-data.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
})
export class LocationsComponent implements OnInit {
  locations: ILocation[] = [];

  constructor(private locationDataService: LocationDataService) {}

  ngOnInit(): void {
    this.locationDataService
      .getLocations()
      .subscribe((locations: ILocation[]) => (this.locations = locations));
  }
}
