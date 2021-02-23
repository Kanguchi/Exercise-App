import firebase from 'firebase';
require('@firebase/firestore');
  var firebaseConfig = {
      apiKey: "AIzaSyAypbTiXPVuWpwPDQQqHrut94e6H1-5LkE",
      authDomain: "exercise-app-ed1f2.firebaseapp.com",
      projectId: "exercise-app-ed1f2",
      storageBucket: "exercise-app-ed1f2.appspot.com",
      messagingSenderId: "548108878747",
      appId: "1:548108878747:web:d4d3341b4f5935aefd173e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
export default firebase.firestore();