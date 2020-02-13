import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SingupComponent } from './auth/singup/singup.component';
import { TripCreateComponent } from './trip/trip-create/trip-create.component';
import { TripDetailsComponent } from './trip/trip-details/trip-details.component';
import { TripEditComponent } from './trip/trip-edit/trip-edit.component';
import { TripListComponent } from './trip/trip-list/trip-list.component';
import { TripStartComponent } from './trip/trip-start/trip-start.component';
import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { TokenInterceptor } from './interceptors/token.interseptor';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SingupComponent,
    TripCreateComponent,
    TripDetailsComponent,
    TripEditComponent,
    TripListComponent,
    TripStartComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
