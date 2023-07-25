import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import key from '../key'

const firebaseConfig = {
  apiKey: key,
  authDomain: 'akksdev-e0197.firebaseapp.com',
  projectId: 'akksdev-e0197',
  databaseURL: 'https://akksdev-e0197-default-rtdb.europe-west1.firebasedatabase.app/'
};

firebase.initializeApp(firebaseConfig);

export default firebase;