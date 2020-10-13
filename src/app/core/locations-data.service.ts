import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ILocation } from '../shared/location-interface';

@Injectable({
  providedIn: 'root',
})
export class LocationDataService {
  baseUrl = 'assets/';
  locations: Record<number, ILocation> = {};

  constructor(private http: HttpClient) {}

  getLocations(): Observable<ILocation[]> {
    // Check if addresses are already loaded
    if (this.locations && Object.keys(this.locations).length) {
      return of(Array.from(Object.values(this.locations)));
    }

    // If not loaded, get it from locations.json from assets
    return this.http.get<ILocation[]>(this.baseUrl + 'locations.json').pipe(
      map((locations) => {
        locations.forEach((location) => {
          // Store all addresses to a dictionary for future reference and easy access
          this.locations[location.id] = location;
        });

        return locations;
      })
    );
  }

  getLocationName(id: number): Observable<string> {
    if (!id) {
      return;
    }

    return this.getLocation(id).pipe(
      map((location) => {
        return location.name;
      })
    );
  }

  getLocation(id: number): Observable<ILocation> {
    if (!Object.keys(this.locations).length) {
      return;
    }

    return of(this.locations[id]);
  }

  addLocation(newLocation: ILocation) {
    if (newLocation) {
      newLocation.id = this.createId();
      const location = {
        ...newLocation,
      };
      this.locations[newLocation.id] = location;
    }
  }

  updateLocation(location: ILocation) {
    if (location) {
      this.locations[location.id] = location;
    }
  }

  deleteLocation(locationId: number) {
    if (locationId) {
      delete this.locations[locationId];
    }
  }

  private createId(): number {
    const locationValues: ILocation[] = Object.values(this.locations);

    const maxId: number = Math.max.apply(
      Math,
      locationValues.map((location) => {
        return location.id;
      })
    );

    return maxId + 1;
  }
}
