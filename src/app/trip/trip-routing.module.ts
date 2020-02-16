import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TripStartComponent } from './trip-start/trip-start.component';
import { TripCreateComponent } from './trip-create/trip-create.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { TripEditComponent } from './trip-edit/trip-edit.component';
import { TripListComponent } from './trip-list/trip-list.component';

const routes: Route[] = [

  { path: '', pathMatch: 'full', component: TripStartComponent },
  { path: 'start', component: TripStartComponent },
  { path: 'create', component: TripCreateComponent },
  { path: 'details/:id', component: TripDetailsComponent },
  { path: 'edit/:id', component: TripEditComponent },
  { path: 'list', component: TripListComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class TripRoutingModule { }
