// Used to connect to Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBfhi-8WF5e69hi94_ieTb_H0Hfdsz_ohg",
  authDomain: "contact-form-firebase-9e685.firebaseapp.com",
  databaseURL: "https://contact-form-firebase-9e685.firebaseio.com",
  projectId: "contact-form-firebase-9e685",
  storageBucket: "contact-form-firebase-9e685.appspot.com",
  messagingSenderId: "9460381975",
  appId: "1:9460381975:web:bdd52a663187cbf5ba9f52"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

// Start grabbing our DOM element
const submitBtn = document.querySelector('#submit');

let userName = document.querySelector('#userFullName');
let userMessage = document.querySelector('#userMessage');

const db = firestore.collection("contactData");
submitBtn.addEventListener('click', function () {
  let userNameInput = userName.value;
  let userMessageInput = userMessage.value;

  // Access DB Collection
  db.doc().set({
    name: userNameInput,
    message: userMessageInput
  }).then(function () {
    console.log("Data saved")
  }).catch(function (error) {
    console.log(error);
  });
})