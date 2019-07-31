import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyDdy23shagXwTfOBD6vWgJla8ES2NJ_cCY",
      authDomain: "bookshelves-c1ea8.firebaseapp.com",
      databaseURL: "https://bookshelves-c1ea8.firebaseio.com",
      projectId: "bookshelves-c1ea8",
      storageBucket: "",
      messagingSenderId: "26978152049",
      appId: "1:26978152049:web:2403a49548cc4060"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
