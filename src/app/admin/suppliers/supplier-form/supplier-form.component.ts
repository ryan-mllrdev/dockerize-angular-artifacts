import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { SuppliersDataService } from 'src/app/core/suppliers-data.service';
import { ILocation } from 'src/app/shared/location-interface';
import { ISupplier } from 'src/app/shared/supplier-interface';
import { ToasterNotificationService } from 'src/app/shared/toaster-notification.service';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.css'],
})
export class SupplierFormComponent implements OnInit, OnDestroy {
  supplierForm: FormGroup;
  changesApplied = true;
  originalSupplierValue: ISupplier;

  @Input() supplier: ISupplier;
  @Input() location: ILocation;
  @Input() locations: ILocation[];

  constructor(
    private formBuilder: FormBuilder,
    private supplierDataService: SuppliersDataService,
    private toasterNotificationService: ToasterNotificationService
  ) {}

  ngOnInit(): void {
    this.originalSupplierValue = {
      ...this.supplier,
    };

    this.supplierForm = this.formBuilder.group({
      id: new FormControl(this.supplier?.id, [Validators.required]),
      name: new FormControl(this.supplier?.name, [Validators.required]),
      location: new FormControl(this.supplier?.locationName, [
        Validators.required,
      ]),
    });
  }

  ngOnDestroy(): void {
    if (!this.changesApplied) {
      this.supplierDataService.updateSupplier(this.originalSupplierValue);
    }
  }

  changeLocation(changeEvent) {
    const selectedLocation: ILocation = changeEvent.target.value as ILocation;
    this.location = selectedLocation;
  }

  saveSupplier() {
    this.changesApplied = true;

    this.supplier.locationId = this.location.id;
    this.supplier.locationName = this.location.name;

    if (!this.supplier.id) {
      this.supplierDataService.addSupplier(this.supplier);

      this.supplierForm.reset(this.originalSupplierValue);

      this.toasterNotificationService.showSuccess(
        'New supplier successfully created',
        ''
      );
    } else {
      const supplier: ISupplier = {
        ...this.supplier,
      };

      this.supplierDataService.updateSupplier(supplier);

      this.toasterNotificationService.showSuccess(
        'Supplier successfully updated',
        ''
      );
    }
  }
}
