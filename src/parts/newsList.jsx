import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, off, remove } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import styles from '../styles/App.module.css';
import { toast } from 'react-toastify';
import { isEmailAllowed } from '../emailUtils';

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleRemove = (itemId) => {
    const database = getDatabase();
    const newsRef = ref(database, 'news/' + itemId);
    remove(newsRef)
      .then(() => {
        toast.success('News item removed successfully.');
      })
      .catch((error) => {
        console.error('Error removing news item:', error);
        toast.error('Failed to remove news item.');
      });
  };

  useEffect(() => {
    const database = getDatabase();
    const newsRef = ref(database, 'news');

    const handleData = (snapshot) => {
      const newsData = snapshot.val();

      const newsArray = Object.keys(newsData || {}).map((key) => ({
        id: key,
        ...newsData[key],
      }));

      const reversedNewsArray = newsArray.reverse();
      console.log("news loaded")
      setNews(reversedNewsArray);
    };

    onValue(newsRef, handleData);

    return () => {
      off(newsRef, handleData);
    };
  }, []);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div className={styles.newscontainer}>
      {news.map((item) => (
        <div key={item.id} className={styles.newslist}>
          <div className={styles.newsparagraph}>
            <h1 className={styles.newsheadline}>{item.title}</h1>
            <div className={styles.textNphoto}>
              <p className={styles.newsparagraphtext}>{item.paragraph}</p>
              <div className={styles.newsFlex}>
                <span className={styles.usersigned}>Posted by: {item.username}</span>
                <p className={styles.usersigned}>Published: {formatTimestamp(item.timestamp)}</p>
              </div>
              {isEmailAllowed(user?.email) && (<button className={styles.newsformbtn} onClick={() => handleRemove(item.id)}>Remove</button>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
