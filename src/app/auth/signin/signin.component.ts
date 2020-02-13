import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

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

}