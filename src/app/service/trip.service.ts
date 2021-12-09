import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../interface/trip';
import { FormGroup } from '@angular/forms';
import { formatDate } from '@angular/common';
import { EnrollmentInfo } from '../interface/enrollment-info';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TripService {
  private url = environment.apiURL + '/trips/all';
  private archiveTripsUrl = environment.apiURL + '/trips/archive';
  private specificTripUrl = environment.apiURL + '/trip-details/';
  private editTripUrl = environment.apiURL + '/edit-trip';
  private createTripUrl = environment.apiURL + '/create-trip';
  private enrollTripUrl = environment.apiURL + '/trips/enroll?tripId=';
  private enrollmentInfoUrl =
    environment.apiURL + '/trips/enrollment-info?tripId=';

  constructor(private httpClient: HttpClient) {}

  public getTrips(): Observable<Trip[]> {
    return this.httpClient.get<Trip[]>(this.url);
  }

  public getTripsFilteredByDate(
    beginDate: string,
    endDate: string
  ): Observable<Trip[]> {
    return this.httpClient.get<Trip[]>(
      this.url + '?beginDate=' + beginDate + '&endDate=' + endDate
    );
  }

  public getArchiveTrips(): Observable<Trip[]> {
    return this.httpClient.get<Trip[]>(this.archiveTripsUrl);
  }

  public getTripById(id: any): Observable<Trip> {
    return this.httpClient.get<Trip>(this.specificTripUrl + id);
  }

  public editTrip(trip: Trip) {
    return this.httpClient.put<any>(this.editTripUrl, trip);
  }

  public insertNewTrip(createTripFormGroup: FormGroup) {
    return this.httpClient.post<any>(this.createTripUrl, {
      name: createTripFormGroup.value.name,
      tripType: createTripFormGroup.value.tripType,
      beginDate: formatDate(
        createTripFormGroup.value.beginDate,
        'yyyy-MM-dd',
        'en'
      ),
      endDate: formatDate(
        createTripFormGroup.value.endDate,
        'yyyy-MM-dd',
        'en'
      ),
      pricePerPerson: createTripFormGroup.value.pricePerPerson,
      peopleLimit: createTripFormGroup.value.peopleLimit,
      description: createTripFormGroup.value.description,
      map: createTripFormGroup.value.map,
    });
  }

  public enrollToATrip(id: number) {
    return this.httpClient.post<any>(this.enrollTripUrl + id, {});
  }

  public getEnrollmentInfo(id: number) {
    return this.httpClient.get<EnrollmentInfo>(this.enrollmentInfoUrl + id);
  }
}
