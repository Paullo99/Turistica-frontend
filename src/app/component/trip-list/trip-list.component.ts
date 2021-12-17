import { Component, OnInit } from '@angular/core';
import { Trip } from '../../interface/trip';
import { TripService } from '../../service/trip.service';
import { formatDate } from '@angular/common';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css'],
})
export class TripListComponent implements OnInit {
  trips: Trip[] = [];
  beginDate: string = '';
  endDate: string = '';

  minDate = new Date();

  constructor(
    private tripService: TripService,
    private appService: AppService
  ) {
    this.tripService.getTrips().subscribe(
      (data) => {
        this.trips = data;
      },
      (error) => appService.showSnackBar('Błąd pobierania danych. Spróbuj ponownie.')
    );
  }

  filter() {
    let beginDateString = '';
    let endDateString = '';

    if (this.beginDate != '' && this.beginDate != null) {
      beginDateString = formatDate(this.beginDate, 'yyyy-MM-dd', 'en');
    }

    if (this.endDate != '' && this.endDate != null) {
      endDateString = formatDate(this.endDate, 'yyyy-MM-dd', 'en');
    }

    this.tripService
      .getTripsFilteredByDate(beginDateString, endDateString)
      .subscribe(
        (data) => {
          this.trips = data;
        },
        () =>
          this.appService.showSnackBar(
            'Błąd pobierania danych. Spróbuj ponownie.'
          )
      );
  }

  ngOnInit(): void {}
}
