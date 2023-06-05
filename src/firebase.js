import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyBjvXNvBDagb-3P4BwDi4CHC88SSSDcYZ4',
  authDomain: 'akksdev-e0197.firebaseapp.com',
  projectId: 'akksdev-e0197',
  databaseURL: 'https://akksdev-e0197-default-rtdb.europe-west1.firebasedatabase.app/'
};

firebase.initializeApp(firebaseConfig);

export default firebase;