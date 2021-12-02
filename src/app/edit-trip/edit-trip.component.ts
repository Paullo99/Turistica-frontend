
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Trip } from '../interfaces/trip';
import { AppService } from '../services/app.service';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {

  description: string | undefined;
  map: string | undefined;

  constructor(
    public dialogRef: MatDialogRef<EditTripComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: Trip,
    private tripService: TripService,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.description = this.data.description;
    this.map = this.data.map;
    console.log(this.data.id)
  }

  submit(){
      this.tripService.editTrip(this.data).subscribe(
        (data)=>
          this.appService.showSnackBar("Poprawnie zedytowano wyjazd!"),
          (error)=>
          this.appService.showSnackBar("Błąd krytyczny! Spróbuj ponownie")
      )
  }

  cancel(){

  }

}
