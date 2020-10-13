import { Component, OnInit, Input } from '@angular/core';
import { ILocation } from 'src/app/shared/location-interface';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css'],
})
export class LocationListComponent implements OnInit {
  searchText: string;

  constructor() {}

  @Input() locations: ILocation[];

  ngOnInit(): void {}

  getLocations(locations: ILocation[]) {
    this.locations = locations;
  }
}
