import { Component, OnInit } from '@angular/core';
import { Trip } from '../classes/trip';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-archive-trips',
  templateUrl: './archive-trips.component.html',
  styleUrls: ['./archive-trips.component.css']
})
export class ArchiveTripsComponent implements OnInit {

  trips: Trip[] = [];
  constructor(private tripService: TripService) {
    this.tripService.getArchiveTrips().subscribe(data => {
      this.trips = data;
      console.log(this.trips[0]);
    });
  }

  ngOnInit(): void {
  }

}
