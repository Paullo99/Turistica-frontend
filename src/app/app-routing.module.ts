import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveTripsComponent } from './archive-trips/archive-trips.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TripListComponent } from './trip-list/trip-list.component';

const routes: Routes = [
  { path: 'trips', component: TripListComponent},
  { path: 'archive-trips', component: ArchiveTripsComponent},
  { path: '', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
