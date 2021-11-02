import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Trip } from '../classes/trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private url = "http://localhost:8080/trips/all";

  private archiveTripsUrl = "http://localhost:8080/trips/archive";

  constructor(private httpClient: HttpClient) { }

  public getTrips(): Observable<Trip[]>{
    return this.httpClient.get<Trip[]>(this.url);
  }

  public getArchiveTrips(): Observable<Trip[]>{
    return this.httpClient.get<Trip[]>(this.archiveTripsUrl);
  }
}
