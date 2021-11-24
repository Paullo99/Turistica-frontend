import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Trip } from '../interfaces/trip';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private url = "http://localhost:8080/trips/all";

  private archiveTripsUrl = "http://localhost:8080/trips/archive";

  private specificTripUrl = "http://localhost:8080/trip-details/";

  private createTripUrl = "http://localhost:8080/create-trip";

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
        beginDate: createTripFormGroup.value.beginDate,  
        endDate: createTripFormGroup.value.endDate,  
        pricePerPerson: createTripFormGroup.value.pricePerPerson, 
        limit: createTripFormGroup.value.limit,
        description: createTripFormGroup.value.description,
        map: createTripFormGroup.value.map 
      }
      );
  }
}
