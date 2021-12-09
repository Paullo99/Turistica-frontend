import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Trip } from '../../interface/trip';
import { AppService } from '../../service/app.service';
import { TripService } from '../../service/trip.service';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css'],
})
export class EditTripComponent implements OnInit {
  description: string | undefined;
  map: string | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Trip,
    private tripService: TripService,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.description = this.data.description;
    this.map = this.data.map;
  }

  submit() {
    this.tripService.editTrip(this.data).subscribe(
      () => this.appService.showSnackBar('Poprawnie zedytowano wyjazd!'),
      () => this.appService.showSnackBar('Błąd krytyczny! Spróbuj ponownie')
    );
  }

  cancel() {
    this.description = this.data.description;
  }
}
