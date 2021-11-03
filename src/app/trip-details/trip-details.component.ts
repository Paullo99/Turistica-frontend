import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trip } from '../classes/trip';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
  id: number = -1;
  private sub: any;
  trip!: Trip;
  limitReached: boolean = false;
  image: any;

  constructor(private route: ActivatedRoute, private tripService: TripService) {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
   });

    this.tripService.getTripById(this.id).subscribe(data => {
      this.trip = data;
      if(this.trip.limit === this.trip.enrolledPeople){
        this.limitReached=true;
      }
      var base64String = this.trip.exampleImage;
      this.image = 'data:image/jpeg;base64,' + base64String;
    });
   }

  ngOnInit(): void {
   
  }


}
