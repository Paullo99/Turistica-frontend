import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TripListComponent } from './trip-list/trip-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArchiveTripListComponent } from './archive-trip-list/archive-trip-list.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { SafeHtmlPipe } from './safe-html.pipe';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { InfoPaymentComponent } from './info-payment/info-payment.component';
import { InfoGeneralComponent } from './info-general/info-general.component';

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
    CreateTripComponent,
    EditTripComponent,
    InfoPaymentComponent,
    InfoGeneralComponent,
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
    MatDialogModule,
    MatSelectModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  providers: [{ provide:  MAT_DATE_LOCALE, useValue: 'pl-PL' },
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
