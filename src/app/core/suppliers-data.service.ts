import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocationDataService } from './locations-data.service';
import { ISupplier } from '../shared/supplier-interface';

@Injectable({
  providedIn: 'root',
})
export class SuppliersDataService {
  baseUrl = 'assets/';
  suppliers: Record<number, ISupplier> = {};

  /**
   *
   */
  constructor(
    private http: HttpClient,
    private locationDataService: LocationDataService
  ) {}

  getSuppliers(): Observable<ISupplier[]> {
    // Check if data are already loaded
    if (this.suppliers && Object.keys(this.suppliers).length) {
      return of(Array.from(Object.values(this.suppliers)));
    }

    // If not loaded, get it from /assets/suppliers.json
    return this.http.get<ISupplier[]>(this.baseUrl + 'suppliers.json').pipe(
      map((suppliers) => {
        suppliers.forEach((supplier) => {
          // Get address name and assign it to the match item in supplier according to the addressId
          this.locationDataService
            .getLocationName(supplier.locationId)
            .subscribe((name: string) => {
              supplier.locationName = name;

              // Store each record to a dictionary for future reference and easy access
              this.suppliers[supplier.id] = supplier;
            });
        });
        return suppliers;
      })
    );
  }

  getSupplier(id: number): Observable<ISupplier> {
    if (!Object.keys(this.suppliers).length) {
      return;
    }

    return of(this.suppliers[id]);
  }

  getSupplierName(id: number): Observable<string> {
    if (!id) {
      return;
    }

    return this.getSupplier(id).pipe(
      map((supplier) => {
        return supplier.name;
      })
    );
  }

  addSupplier(newSupplier: ISupplier) {
    if (newSupplier) {
      newSupplier.id = this.createId();
      const supplier = {
        ...newSupplier,
      };
      this.suppliers[newSupplier.id] = supplier;
    }
  }

  deleteSupplier(supplierId: number) {
    if (supplierId) {
      delete this.suppliers[supplierId];
    }
  }

  updateSupplier(supplier: ISupplier) {
    if (supplier) {
      this.suppliers[supplier.id] = supplier;
    }
  }

  private createId(): number {
    const supplierValues: ISupplier[] = Object.values(this.suppliers);

    const maxId: number = Math.max.apply(
      Math,
      supplierValues.map((supplier) => {
        return supplier.id;
      })
    );

    return maxId + 1;
  }
}
