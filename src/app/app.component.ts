import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {
   firebase.initializeApp({
     apiKey: "AIzaSyADBIZkF3GnSQM5AP_pOW7aE9SFSBfbpP0",
     authDomain: "trips-b868f.firebaseapp.com"
   })
  }

}
