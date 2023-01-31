import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJRst59xc41bv-NK_rAdcDNppuxCr_OEk",
  authDomain: "geolocalizacao-fotos.firebaseapp.com",
  databaseURL: "https://geolocalizacao-fotos-default-rtdb.firebaseio.com",
  projectId: "geolocalizacao-fotos",
  storageBucket: "geolocalizacao-fotos.appspot.com",
  messagingSenderId: "548158515899",
  appId: "1:548158515899:web:d41d78ea3ab565c6a4d79e",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
