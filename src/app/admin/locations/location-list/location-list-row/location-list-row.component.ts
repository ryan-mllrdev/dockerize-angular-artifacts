import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ILocation } from 'src/app/shared/location-interface';
import { LocationDataService } from 'src/app/core/locations-data.service';

@Component({
  selector: 'app-location-list-row',
  templateUrl: './location-list-row.component.html',
  styleUrls: ['./location-list-row.component.css']
})
export class LocationListRowComponent implements OnInit {

  @Input() location: ILocation;

  @Output() locationsUpdated: EventEmitter<ILocation[]> = new EventEmitter();

  constructor(private locationDataService: LocationDataService) { }

  ngOnInit(): void {
  }

  confirmDelete(id: number) {
    this.locationDataService.getLocation(id).subscribe(location => {
      if (location) {
        if (confirm(`Do you really wish to delete ${location.name}`)) {
          this.locationDataService.deleteLocation(id);
          this.reload();
        }
      }
    });
  }

  private reload() {
    this.locationDataService.getLocations().subscribe(locations => {
      this.locationsUpdated.emit(locations);
    });
  }

}
