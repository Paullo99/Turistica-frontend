import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { Trip } from '../../interface/trip';
import { TripService } from '../../service/trip.service';

@Component({
  selector: 'app-archive-trip-list',
  templateUrl: './archive-trip-list.component.html',
  styleUrls: [
    '../trip-list/trip-list.component.css',
    './archive-trip-list.component.css',
  ],
})
export class ArchiveTripListComponent implements OnInit {
  trips: Trip[] = [];

  constructor(private tripService: TripService, private appService: AppService) {
    this.tripService.getArchiveTrips().subscribe((data) => {
      this.trips = data;
    }, () => appService.showSnackBar("Błąd pobierania danych. Spróbuj ponownie."));
  }

  ngOnInit(): void {}
}
