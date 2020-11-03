import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAj6kUHjVSj72o5JJfwt1NrIlK0yrjgaZc",
    authDomain: "punkapi.firebaseapp.com",
    databaseURL: "https://punkapi.firebaseio.com",
    projectId: "punkapi",
    storageBucket: "punkapi.appspot.com",
    messagingSenderId: "794746495892",
    appId: "1:794746495892:web:ccdc43d27bc531c543a581",
    measurementId: "G-P95S7932Q1"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider()

export default firebase;