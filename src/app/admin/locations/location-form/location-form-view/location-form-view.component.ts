import { Component, OnInit } from '@angular/core';
import { ILocation } from 'src/app/shared/location-interface';
import { ActivatedRoute } from '@angular/router';
import { LocationDataService } from 'src/app/core/locations-data.service';

@Component({
  selector: 'app-location-form-view',
  templateUrl: './location-form-view.component.html',
  styleUrls: ['./location-form-view.component.css'],
})
export class LocationFormViewComponent implements OnInit {
  location: ILocation;

  constructor(
    private route: ActivatedRoute,
    private locationDataService: LocationDataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.getLocation(+params.get('id'));
    });
  }

  private getLocation(id: number) {
    this.locationDataService.getLocation(id).subscribe((location) => {
      this.location = location;
      if (!this.location) {
        this.initializeDefaults();
        return;
      }
    });
  }

  private initializeDefaults() {
    const location: ILocation = { id: 0, name: '' };
    this.location = {
      ...location,
    };
  }
}
