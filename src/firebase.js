import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
    apiKey: "AIzaSyCHWQVc-w7vcoR_AT7J9aes1pyG7ItPRhg",
    authDomain: "christmas-letter.firebaseapp.com",
    projectId: "christmas-letter",
    storageBucket: "christmas-letter.appspot.com",
    messagingSenderId: "988616946678",
    appId: "1:988616946678:web:61616e758e47e7e3100dd7",
    measurementId: "G-S1KB9BCDNL"
}
class Firebase{

  constructor(){
      firebase.initializeApp(config);
      this.auth = firebase.auth();
      this.db = firebase.firestore();
      this.storage = firebase.storage();
      this.googleProvider = new firebase.auth.GoogleAuthProvider();
  }
}

export default new Firebase();
