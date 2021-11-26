import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Trip } from '../interfaces/trip';
import { FormGroup } from '@angular/forms';
import { formatDate } from '@angular/common';
import { EnrollmentInfo } from '../interfaces/enrollment-info';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private url = "http://localhost:8080/trips/all";

  private archiveTripsUrl = "http://localhost:8080/trips/archive";

  private specificTripUrl = "http://localhost:8080/trip-details/";

  private createTripUrl = "http://localhost:8080/create-trip";

  private enrollTripUrl = "http://localhost:8080/trips/enroll?tripId=";
  private enrollmentInfoUrl = "http://localhost:8080/trips/enrollment-info?tripId=";

  constructor(private httpClient: HttpClient) { }

  public getTrips(): Observable<Trip[]>{
    return this.httpClient.get<Trip[]>(this.url);
  }

  public getTripsFilteredByDate(beginDate: string, endDate: string): Observable<Trip[]>{
    return this.httpClient.get<Trip[]>(this.url+"?beginDate=" + beginDate+"&endDate="+endDate);
  }

  public getArchiveTrips(): Observable<Trip[]>{
    return this.httpClient.get<Trip[]>(this.archiveTripsUrl);
  }

  public getTripById(id:any): Observable<Trip>{
    return this.httpClient.get<Trip>(this.specificTripUrl + id);
  }

  public insertNewTrip(createTripFormGroup: FormGroup){
    return this.httpClient.post<any>(this.createTripUrl, 
      {
        name : createTripFormGroup.value.name,  
        tripType: createTripFormGroup.value.tripType,
        beginDate: formatDate(createTripFormGroup.value.beginDate, 'yyyy-MM-dd', 'en'),
        endDate: formatDate(createTripFormGroup.value.endDate, 'yyyy-MM-dd', 'en'),  
        pricePerPerson: createTripFormGroup.value.pricePerPerson, 
        peopleLimit: createTripFormGroup.value.peopleLimit,
        description: createTripFormGroup.value.description,
        map: createTripFormGroup.value.map 
      });
  }

  public enrollToATrip(id:number){
    return this.httpClient.post<any>(this.enrollTripUrl + id, {});
  }

  public getEnrollmentInfo(id: number){
    return this.httpClient.get<EnrollmentInfo>(this.enrollmentInfoUrl + id);
  }
}
