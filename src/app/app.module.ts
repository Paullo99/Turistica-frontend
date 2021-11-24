import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TripListComponent } from './trip-list/trip-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LOCALE_ID } from '@angular/core';
import { ArchiveTripListComponent } from './archive-trip-list/archive-trip-list.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { SafeHtmlPipe } from './safe-html.pipe';
import { CreateTripComponent } from './create-trip/create-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    TripListComponent,
    HomePageComponent,
    ArchiveTripListComponent,
    TripDetailsComponent,
    LoginFormComponent,
    RegisterFormComponent,
    SafeHtmlPipe,
    CreateTripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pl-PL" },
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
