import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripToInsert } from 'src/app/class/trip-to-insert';
import { AppService } from '../../service/app.service';
import { TripService } from '../../service/trip.service';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css'],
})
export class CreateTripComponent implements OnInit {
  createTripFormGroup: FormGroup;

  beginDate: string = '';
  endDate: string = '';

  minBeginDate = new Date();
  minEndDate = new Date();

  constructor(
    private formBuilder: FormBuilder,
    private tripService: TripService,
    private router: Router,
    private appService: AppService
  ) {
    this.createTripFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      tripType: ['', Validators.required],
      beginDate: ['', Validators.required],
      endDate: ['', Validators.required],
      pricePerPerson: ['', [Validators.pattern('[0-9]+'), Validators.required]],
      peopleLimit: ['',[Validators.pattern('[0-9]+'), Validators.required]],
      description: [''],
      map: [''],
    });
  }

  ngOnInit(): void {}

  changeMinDate(): void {
    this.minEndDate = new Date(
      formatDate(this.createTripFormGroup.value.beginDate, 'yyyy-MM-dd', 'en')
    );
  }

  createTrip() {
    let tripToInsert = new TripToInsert(
      this.createTripFormGroup.value.name,
      this.createTripFormGroup.value.tripType,
      formatDate(this.createTripFormGroup.value.beginDate, 'yyyy-MM-dd', 'en'),
      formatDate(this.createTripFormGroup.value.endDate, 'yyyy-MM-dd', 'en'),
      this.createTripFormGroup.value.pricePerPerson,
      this.createTripFormGroup.value.peopleLimit,
      this.createTripFormGroup.value.description,
      this.createTripFormGroup.value.map
    );
    this.tripService.insertNewTrip(tripToInsert).subscribe(
      (data) => {
        this.appService.showSnackBar(
          'Dodano nowy wyjazd: ' + this.createTripFormGroup.value.name
        );
        this.router.navigate(['/trips']);
      },
      (error) => {
        this.appService.showSnackBar('Błąd krytyczny! Spróbuj ponownie.');
      }
    );
  }
}
