import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveTripListComponent } from './archive-trip-list/archive-trip-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  { path: 'trips', component: TripListComponent},
  { path: 'archive-trips', component: ArchiveTripListComponent},
  { path: '', component: HomePageComponent},
  { path: 'login', component: LoginFormComponent},
  { path: 'register', component: RegisterFormComponent},
  { path: 'trip-details/:id', component: TripDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
