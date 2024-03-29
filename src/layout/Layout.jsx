import { Link, Outlet } from 'react-router-dom'

import styles from '../styles/App.module.css'
import Footer from '../parts/Footer'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useEffect, useState } from 'react';
import Login from '../parts/Login';
import Logout from '../parts/Logout';
import { isEmailAllowed } from '../emailUtils';

function Layout() {
//useeffect for å sjekke om bruker er logget inn, viser forskjellig layout om bruker er/ikke er.
    const [user, setUser] = useState(null);

    useEffect(() => {
      const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            const email = user.email;

            if(isEmailAllowed(email)){

                setUser(user);
            }
        } else {

        firebase.auth().signOut();
        setUser(null);
        }
      });
  
      return () => unsubscribe();
    }, []);

    return(
        <div>
            {user ? 
            <div>
            <div className={styles.navbar}>
                <div className={styles.navlogo}>
                    <Link className={styles.navlogotext} to='/AKKS'>AKKS</Link>
                </div>
                <div className={styles.navinvis}/>
                <a className={styles.navlink2}>ADMIN</a>

                    <Link className={styles.navlink} to='/AKKS/news'>News</Link>
                    <Link className={styles.navlink} to='/AKKS/under'>Company Info</Link>
                    <Link className={styles.navlink} to='/AKKS/contact'>Contact Us</Link>
                    {/* <Link className={styles.navlink} to='/AKKS/acess'>Request Acess</Link> */}
                    <div className={styles.navlink}><Logout/></div>
            </div>

            <Outlet/>

            <Footer/>
            </div>
            :
            <div>
            <div className={styles.navbar}>
                <div className={styles.navlogo}>
                    <Link className={styles.navlogotext} to='/AKKS'>AKKS</Link>
                </div>
                <div className={styles.navinvis}/>

                    <Link className={styles.navlink} to='/AKKS/news'>News</Link>
                    <Link className={styles.navlink} to='/AKKS/under'>Company Info</Link>
                    <Link className={styles.navlink} to='/AKKS/contact'>Contact Us</Link>
                    {/* <Link className={styles.navlink} to='/AKKS/acess'>Request Acess</Link> */}
                    <div className={styles.navlink}><Login/></div>
            </div>

            <Outlet/>

            <Footer/>
            </div>
        }
        </div>
    )
}

export default Layout