import { Component, OnInit } from '@angular/core';
import { Trip } from '../classes/trip';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-archive-trip-list',
  templateUrl: '../trip-list/trip-list.component.html',
  styleUrls: ['../trip-list/trip-list.component.css',  './archive-trip-list.component.css']
})
export class ArchiveTripListComponent implements OnInit {

  trips: Trip[] = [];
  beginDate: any;
  endDate: any;

  minDate = new Date("1970-01-01");

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  constructor(private tripService: TripService) {
    this.tripService.getArchiveTrips().subscribe(data => {
      this.trips = data;
    });
  }

  ngOnInit(): void {
  }

  test(id:number){
    console.log(id);
  }

  filter(){
    console.log("x");
  }

}
