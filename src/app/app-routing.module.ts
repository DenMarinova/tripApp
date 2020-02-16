import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SingupComponent } from './auth/singup/singup.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { TripModule } from './trip/trip.module';



const routes: Route[] = [
  { path: '', component: HomeComponent },
  {
    path: 'auth', children: [
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SingupComponent }
    ]
  },
  {
    path: 'trip',
    loadChildren: () => TripModule,
    canActivate: [AuthGuard]
  },
  {
    path: '**', redirectTo: '/auth/signin'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
