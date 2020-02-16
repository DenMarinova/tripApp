import { NgModule } from '@angular/core';
import { SingupComponent } from './singup/singup.component';
import { SigninComponent } from './signin/signin.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SingupComponent,
    SigninComponent
  ],

  imports: [
    CommonModule,
    FormsModule
  ]
})

export class AuthModule { }
