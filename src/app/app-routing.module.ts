import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveTripListComponent } from './component/archive-trip-list/archive-trip-list.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { TripDetailsComponent } from './component/trip-details/trip-details.component';
import { TripListComponent } from './component/trip-list/trip-list.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { RegisterFormComponent } from './component/register-form/register-form.component';
import { CreateTripComponent } from './component/create-trip/create-trip.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';

const routes: Routes = [
  { path: 'trips', component: TripListComponent},
  { path: 'archive-trips', component: ArchiveTripListComponent},
  { path: '', component: HomePageComponent},
  { path: 'login', component: LoginFormComponent},
  { path: 'register', component: RegisterFormComponent},
  { path: 'trip-details/:id', component: TripDetailsComponent},
  { path: 'create-trip', component: CreateTripComponent},
  { path: 'user-list', component: UserListComponent},
  { path: 'add-user', component: AddUserComponent},
  { path: 'change-password', component: ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
