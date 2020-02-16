import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TripStartComponent } from './trip-start/trip-start.component';
import { TripCreateComponent } from './trip-create/trip-create.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { TripEditComponent } from './trip-edit/trip-edit.component';

import { TripListComponent } from './trip-list/trip-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TripStartComponent,
    TripCreateComponent,
    TripDetailsComponent,
    TripEditComponent,
    TripListComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})

export class TripModule { }
