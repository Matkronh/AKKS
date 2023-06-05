import styles from '../styles/App.module.css'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useEffect, useState } from 'react';
import { isEmailAllowed } from '../emailUtils';
import NewsForm from '../parts/newsForm'
import NewsList from '../parts/newsList'


function News(){

    const [user, setUser] = useState(null);

    useEffect(() => {
      const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            const email = user.email;

            if(isEmailAllowed(email)){
                // User is signed in
                setUser(user);
            }
        } else {
           // User is signed in but the email is not allowed
        firebase.auth().signOut(); // Sign out the user
        setUser(null);
        }
      });
  
      return () => unsubscribe();
    }, []);

    return(

        <div className={styles.newscontainer}>
            {user ? 
                <div className={styles.newscontainer}>
                    <h1 className={styles.newsHeader}>News</h1>
                    <NewsForm/>
                    <NewsList/>
                    <div className={styles.emptydiv}/>
                </div>
                :
                <div className={styles.newscontainer}>
                    <h1 className={styles.newsHeader}>News</h1>
                    <NewsList/>
                </div>
            }
        </div> 
    )
}

export default News