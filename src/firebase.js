import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(
//PONER ACA LA INFO DE SU APP
{
    apiKey: "AIzaSyDBqmSNWwqxbaY6FDt59D3-mPSM6M32PKM",
    authDomain: "azulazul-93e51.firebaseapp.com",
    projectId: "azulazul-93e51",
    storageBucket: "azulazul-93e51.appspot.com",
    messagingSenderId: "377049286101",
    appId: "1:377049286101:web:ee285a0b3d6a3f03fc695c"
  }
);
export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}








