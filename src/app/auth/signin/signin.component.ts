import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import {  Router } from '@angular/router';

import * as firebase from 'firebase';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router : Router
    ) { }

  ngOnInit(): void {
  }

  login(form : NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signIn(email, password)
  }

  logout() {
    firebase.auth().signOut()
  }

  toSignUp() {
    this.router.navigate(['/auth/signup']);
  }

}
