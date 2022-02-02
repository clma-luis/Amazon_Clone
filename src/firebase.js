import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { getFirestore, collection, getDocs } from 'firebase/firestore';


export const app = firebase.initializeApp({
  apiKey: "AIzaSyAjGa68K6-Qc3G9-HpbUZFduinudSyILZU",
  authDomain: "cloneof-2be53.firebaseapp.com",
  databaseURL: "https://cloneof-2be53-default-rtdb.firebaseio.com",
  projectId: "cloneof-2be53",
  storageBucket: "cloneof-2be53.appspot.com",
  messagingSenderId: "766673137019",
  appId: "1:766673137019:web:c48d3304de91fa5f91e1de",
  measurementId: "G-3JYMDFDS05"
  });

  export const db = getFirestore();

