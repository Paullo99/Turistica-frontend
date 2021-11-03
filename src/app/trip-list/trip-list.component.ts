import { Component, OnInit } from '@angular/core';
import { Trip } from '../classes/trip';
import {TripService } from '../services/trip.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  trips: Trip[] = [];
  constructor(private tripService: TripService) {
    this.tripService.getTrips().subscribe(data => {
      this.trips = data;
    });
  }

  ngOnInit(): void {
  }

}
