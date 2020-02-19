import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  //token: string;
  token = localStorage.getItem('tripToken');

  constructor(
    private toastr: ToastrService,
    private router: Router
  ) { }
  signUp(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((data) => {
        firebase.auth()
          .currentUser.getIdToken()
          .then((token: string) => {
            this.saveToken(token);
            this.token = token;
          })
        this.router.navigate(['/trip/list']);
        this.toastr.success('Signed Up!', 'Success');
      })
      .catch(err => {
        this.toastr.error(err.message, 'Warning')
      })
  }

  signIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((a) => {
        console.log(a);

        firebase.auth()
          .currentUser.getIdToken()
          .then((token: string) => {
            this.saveToken(token);
            this.token = token;
          })

        this.router.navigate(['/trip/list']);
        this.toastr.success('Loged In!', 'Success')
      })
      .catch(err => {
        this.toastr.error(err.message, 'Warning')
      })
  }

  logout() {
    localStorage.clear();

    firebase.auth().signOut()
      .then(() => {
       this.router.navigate(['/auth/signin']);
       this.toastr.success('Loged out!', 'Success');
       this.token = null;
      })
      .catch(err => {
        this.toastr.error(err.message, 'Warning');
      })

  }
  // getToken() { //insteat this --> localStorage in the interseptor
  //   firebase.auth()
  //     .currentUser.getIdToken()
  //     .then((token: string)=> {
  //       this.token = token;
  //     }).catch(err=> console.log(err))
  //   return this.token;
  // }

  saveToken(token: string) {
    localStorage.setItem('tripToken', token);
  }

  isAuthenticated(): boolean {
    return this.token !== null;
  }



}

