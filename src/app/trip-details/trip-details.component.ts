import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { EnrollmentInfo } from '../interfaces/enrollment-info';
import { Trip } from '../interfaces/trip';
import { AppService } from '../services/app.service';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css'],
})
export class TripDetailsComponent implements OnInit {
  id: number = -1;
  trip!: Trip;
  enrollmentInfo!: EnrollmentInfo;
  isEnrolled: boolean = false;
  role: string | any = "";
  limitReached: boolean = false;
  image: any;

  constructor(private route: ActivatedRoute, private tripService: TripService, private app: AppComponent, private appService: AppService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
   });

    this.tripService.getTripById(this.id).subscribe(data => {
      this.trip = data;
    });
    this.tripService.getEnrollmentInfo(this.id).subscribe(data =>{
      this.enrollmentInfo = data;
      this.isEnrolled = this.enrollmentInfo.enrolled;
    })
    this.role = sessionStorage.getItem('role')
    console.log(this.app.role)
   }

   submit(){

     this.tripService.enrollToATrip(this.id).subscribe(
       data=> {
        this.tripService.getEnrollmentInfo(this.id).subscribe(data =>{
          this.enrollmentInfo = data;
          this.isEnrolled = this.enrollmentInfo.enrolled;
        })
       }, (error)=>
       {
         if(error.status=409){
           this.appService.showSnackBar("Limit uczestników został już osiągnięty!")
         }
         else{
           this.appService.showSnackBar("Błąd krytyczny! Spróbuj ponownie.")
         }
           
       }
     );
   }

  ngOnInit(): void {
   
  }


}
