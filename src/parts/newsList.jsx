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

    // Clean up the listener when the component is unmounted
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

      // Convert the news data object to an array
      const newsArray = Object.keys(newsData || {}).map((key) => ({
        id: key,
        ...newsData[key],
      }));

      // Reverse the order of the news array
      const reversedNewsArray = newsArray.reverse();

      // Update the news state with the reversed array
      setNews(reversedNewsArray);
    };

    // Listen for changes in the news data
    onValue(newsRef, handleData);

    // Clean up the listener when the component is unmounted
    return () => {
      off(newsRef, handleData);
    };
  }, []);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Adjust the date format as needed
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
