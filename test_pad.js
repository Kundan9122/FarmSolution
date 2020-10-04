// JavaScript file for the web page "World Peace Issue Tracker"
// Created by Kundan Kumar
// Copyright (C) Coursera 2020

var firebaseConfig = {
    apiKey: "AIzaSyCD4lME09DKzprcyfuG-KbFjCjQkJNYFBo",
    authDomain: "duniya-hasino-ka-mela.firebaseapp.com",
    databaseURL: "https://duniya-hasino-ka-mela.firebaseio.com",
    projectId: "duniya-hasino-ka-mela",
    storageBucket: "duniya-hasino-ka-mela.appspot.com",
    messagingSenderId: "363140008374",
    appId: "1:363140008374:web:b420d0c9a27c9942925917",
    measurementId: "G-N9DYG6K0MV"
  };



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Paste the web app's configuration above this line
// Our code starts below

const rootRef = firebase.database().ref("issues/");

// Task 3 ------------------------------------------

// rootRef.push ({
//   description: "Logo does not show up on screen 3",
//   resolved: "yes",
//   severity: "minor"
// });

// rootRef.push ({
//   description: "Screen flashes on save",
//   resolved: "no",
//   severity: "moderate"
// });

// Task 6 ------------------------------------------

// var recordRef = firebase.database().ref("issues/change-me");

// recordRef.update ({
//    "resolved": "yes"
// });

// Task 7 ------------------------------------------

var recordRef = firebase.database().ref("issues/delete-me");

recordRef.remove()
   .catch(function(error) {
     alert("Delete failed: " + error.message)
   });
