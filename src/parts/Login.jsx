import firebase from '../firebase';
import  styles from '../styles/App.module.css'
import { isEmailAllowed } from '../emailUtils';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    provider.setCustomParameters({ prompt: 'select_account' });

    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        const email = user.email;

        if(isEmailAllowed(email)) {
          console.log('Logged in user:', user);
          toast.success('Successfully logged in!');
        } else {
          throw new Error('Access Denied');
        }
      })
      .catch((error) => {
        if (error.message === 'Access Denied') {
          toast.error('Access Denied: You are not allowed to access this part of the site.', {
            autoClose: 3000, // Adjust the duration as needed
          });
        } else {
          console.error('Error logging in:', error);
        }
      });
  };

  return (
    <>
      <a className={styles.navlink} onClick={loginWithGoogle}>Sign In</a>
    </>
  );
};

export default Login;