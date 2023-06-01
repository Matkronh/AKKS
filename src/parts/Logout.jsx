import firebase from '../firebase';
import styles from '../styles/App.module.css'

const Logout = () => {
  const logout = () => {
    firebase.auth().signOut()
      .then(() => {
        console.log('User logged out successfully');
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <>
      <a className={styles.navlink} onClick={logout}>Sign Out</a>
    </>
  );
};

export default Logout;