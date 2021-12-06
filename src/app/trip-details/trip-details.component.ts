import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EditTripComponent } from '../edit-trip/edit-trip.component';
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
  today: Date;
  isEnrolled: boolean = false;
  role: string | any = "";
  limitReached: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    private tripService: TripService, 
    private appService: AppService,
    private matDialog: MatDialog,
    private router: Router) {
    this.today = new Date();
    this.today.setDate(new Date().getDate() - 1);
    
    this.route.params.subscribe(params => {
      this.id = params['id'];
   });

    this.tripService.getTripById(this.id).subscribe(data => {
      this.trip = data;
      this.trip.description = this.trip.description.split('\r').join('\n')
    });
    this.tripService.getEnrollmentInfo(this.id).subscribe(data =>{
      this.enrollmentInfo = data;
      this.isEnrolled = this.enrollmentInfo.enrolled;
    })
    this.role = sessionStorage.getItem('role')
   }

   isArchive(trip: Trip): boolean{
      if(new Date(trip?.beginDate) < this.today){
        return true;
      }
      return false;
   }

   submit(){

     this.tripService.enrollToATrip(this.id).subscribe(
       data=> {
        this.tripService.getEnrollmentInfo(this.id).subscribe(data =>{
          this.enrollmentInfo = data;
          this.isEnrolled = this.enrollmentInfo.enrolled;
          if(this.isEnrolled)
            this.appService.showSnackBar("Zapisano na wyjazd!")
          else
            this.appService.showSnackBar("Wypisano z wyjazdu!")
        })
       }, (error)=>
       {
         if(error.status==409){
           this.appService.showSnackBar("Limit uczestników został już osiągnięty!")
         }
         else{
           this.appService.showSnackBar("Błąd krytyczny! Spróbuj ponownie.")
         }
           
       }
     );
   }

   edit(tripToSend: Trip){
      const dialogRef = this.matDialog.open(EditTripComponent, {
        data: tripToSend,
      });
      dialogRef.afterClosed().subscribe(data =>{
        if(!data){
          this.tripService.getTripById(this.id).subscribe(data => {
            this.trip = data;
            this.trip.description = this.trip.description.split('\r').join('\n');
          })
        }
      });
   }

  ngOnInit(): void {
   
  }


}
