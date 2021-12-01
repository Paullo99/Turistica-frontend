import { Component, OnInit } from '@angular/core';
import { Trip } from '../interfaces/trip';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-archive-trip-list',
  templateUrl: './archive-trip-list.component.html',
  styleUrls: ['../trip-list/trip-list.component.css',  './archive-trip-list.component.css']
})
export class ArchiveTripListComponent implements OnInit {

  trips: Trip[] = [];
  
   constructor(private tripService: TripService) {
    this.tripService.getArchiveTrips().subscribe(data => {
      this.trips = data;
    });
  }

  ngOnInit(): void {
  }

}
