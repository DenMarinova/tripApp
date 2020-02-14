import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SingupComponent } from './auth/singup/singup.component';
import { TripStartComponent } from './trip/trip-start/trip-start.component';
import { TripCreateComponent } from './trip/trip-create/trip-create.component';
import { TripDetailsComponent } from './trip/trip-details/trip-details.component';
import { TripEditComponent } from './trip/trip-edit/trip-edit.component';
import { TripListComponent } from './trip/trip-list/trip-list.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';



const routes: Route[] = [
  { path: '', component: HomeComponent},
  { path: 'auth', children: [
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SingupComponent }
  ]},
  { path: 'trip', children: [
    { path: '', pathMatch: 'full', component: TripStartComponent },
    { path: 'start', component: TripStartComponent },
    { path: 'create', component: TripCreateComponent },
    { path: 'details/:id', component: TripDetailsComponent },
    { path: 'edit/:id', component: TripEditComponent },
    { path: 'list', component: TripListComponent }
  ],
  // canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
