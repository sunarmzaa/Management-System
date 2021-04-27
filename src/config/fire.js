import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyDoTbGvaakiKihlN5ZV9BesMjCFQTxty6w",
  authDomain: "management-system-c2114.firebaseapp.com",
  projectId: "management-system-c2114",
  storageBucket: "management-system-c2114.appspot.com",
  messagingSenderId: "953244792071",
  appId: "1:953244792071:web:30526a1e50c8d1474f81a2",
  measurementId: "G-CS2EVGEKFF"
};

  const fire = firebase.initializeApp(firebaseConfig)

  export default fire;