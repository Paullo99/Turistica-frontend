import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {

  createTripFormGroup: FormGroup;

  beginDate : string = "";
  endDate : string = "";

  minDate = new Date();

  constructor(private formBuilder: FormBuilder, private tripService: TripService, private router: Router) {
    this.createTripFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      beginDate: ['', Validators.required],
      endDate: ['', Validators.required],
      pricePerPerson: ['', [Validators.pattern("[0-9]+"), Validators.required]],
      limit: [''],
      description: [''],
      map: ['']
    });
  }

  ngOnInit(): void {
  }

  changeMinDate(): void {
   this.minDate = new Date(formatDate(this.createTripFormGroup.value.beginDate, 'yyyy-MM-dd', 'en'))
  }


  createTrip(){
    this.tripService.insertNewTrip(this.createTripFormGroup).subscribe(
      (data) => {
        alert("Dodano nowy wyjazd! Możesz go znaleźć w zakładce \"Przeglądaj oferty\"");
        this.router.navigate(['/trips']);
      }, (error) => {
          alert("Błąd krytyczny! Spróbuj ponownie.");
      }
    );
  }
}
