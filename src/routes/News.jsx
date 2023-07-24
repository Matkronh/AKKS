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
                // bruker logges inn
                setUser(user);
            }
        } else {
           // bruker sin mail er ikke whitelistet og logges ikke inn
        firebase.auth().signOut();
        setUser(null);
        }
      });
  
      return () => unsubscribe();
    }, []);

    return(
        //om bruker er logges inn får han newsForm der han kan legge til nyheter til database og slette de, om han ikke er logget inn får han bare opp newslist.
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