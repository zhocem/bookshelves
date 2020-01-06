import { Component } from '@angular/core';
import * as firebase from "firebase";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBh6iZ7bT2IIbt4saUxXFK6dbRYIN4YzGM",
    authDomain: "bookshelves-c6c21.firebaseapp.com",
    databaseURL: "https://bookshelves-c6c21.firebaseio.com",
    projectId: "bookshelves-c6c21",
    storageBucket: "bookshelves-c6c21.appspot.com",
    messagingSenderId: "962658556829",
    appId: "1:962658556829:web:01257bf79556e9ceb2ed74"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 
  }
}
