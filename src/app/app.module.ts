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
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TripListComponent } from './component/trip-list/trip-list.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArchiveTripListComponent } from './component/archive-trip-list/archive-trip-list.component';
import { TripDetailsComponent } from './component/trip-details/trip-details.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { RegisterFormComponent } from './component/register-form/register-form.component';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { SafeHtmlPipe } from './pipe/safe-html.pipe';
import { CreateTripComponent } from './component/create-trip/create-trip.component';
import { EditTripComponent } from './component/edit-trip/edit-trip.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { InfoPaymentComponent } from './component/info-payment/info-payment.component';
import { InfoGeneralComponent } from './component/info-general/info-general.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { DeleteUserComponent } from './component/delete-user/delete-user.component';

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
    UserListComponent,
    AddUserComponent,
    ChangePasswordComponent,
    EditUserComponent,
    DeleteUserComponent,
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
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
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
