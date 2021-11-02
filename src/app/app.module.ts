import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TripListComponent } from './trip-list/trip-list.component';
import { HomePageComponent } from './home-page/home-page.component';

import { LOCALE_ID } from '@angular/core';
import { ArchiveTripsComponent } from './archive-trips/archive-trips.component';

@NgModule({
  declarations: [
    AppComponent,
    TripListComponent,
    HomePageComponent,
    ArchiveTripsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [ { provide: LOCALE_ID, useValue: "pl-PL" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
