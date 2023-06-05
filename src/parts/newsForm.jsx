import { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';
import styles from '../styles/App.module.css';
import { toast } from 'react-toastify';

const NewsForm = () => {
  const [title, setTitle] = useState('');
  const [paragraph, setParagraph] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === '' || paragraph === '') {
      toast.error('Please fill in all fields.');
      return;
    }

    // Get the current user's username from local storage
    const username = localStorage.getItem('username');

    // Store the news data in the database
    const database = getDatabase();
    const newsRef = ref(database, 'news');
    const newNews = {
      title,
      paragraph,
      username,
      timestamp: { '.sv': 'timestamp' }, // Use { '.sv': 'timestamp' } for server timestamp
    };
    push(newsRef, newNews);

    // Clear the form inputs
    setTitle('');
    setParagraph('');
  };

  return (
    <form className={styles.formstyle} onSubmit={handleSubmit}>
      <input
        className={styles.newsforminput}
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className={styles.newsformtextarea}
        placeholder="Paragraph"
        value={paragraph}
        onChange={(e) => setParagraph(e.target.value)}
      ></textarea>
      <button className={styles.newsformbtn} type="submit">
        Submit
      </button>
      <p>Current Timestamp: {new Date().toString()}</p>
    </form>
  );
};

export default NewsForm;
