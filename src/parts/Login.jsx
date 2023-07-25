import firebase from '../firebase';
import  styles from '../styles/App.module.css'
import { isEmailAllowed } from '../emailUtils';
import storeUsername from '../userUtils'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
//lagt til en custom parameter her som alltid prompter deg hvilken konto du vill logge inn med i motsetning til default auto login
    provider.setCustomParameters({ prompt: 'select_account' });

    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        const email = user.email;
        const username = user.displayName;
//lagrer info om bruker som logger inn
        storeUsername(username);

        if(isEmailAllowed(email)) {
          //melding om at bruker har logget inn og laster inn siden pånytt
          /* window.location.href = '/AKKS/'; */
          console.log('Logged in user:', user);
          toast.success('Successfully logged in!');
          /* window.location.reload(); */
          setTimeout(() => {
            window.location.href = '/AKKS/';
          }, 1000);
        } else {
          throw new Error('Access Denied');
        }
      })
      .catch((error) => {
        if (error.message === 'Access Denied') {
          toast.error('Access Denied: You are not allowed to access this part of the site.', {
            autoClose: 3000, 
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