import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
   apiKey: "AIzaSyDUh76pwK2SmYI1EXvReHjpB6RhBX9uuFg",
   authDomain: "meditation-5961c.firebaseapp.com",
   databaseURL: "https://meditation-5961c.firebaseio.com",
   projectId: "meditation-5961c",
   storageBucket: "meditation-5961c.appspot.com",
   messagingSenderId: "976231145691",
   appId: "1:976231145691:web:b4aaacf0c3e9c9acdcacfe",
   measurementId: "G-PSKH1118MT"
 };

 firebase.initializeApp(firebaseConfig);

 export default firebase;
