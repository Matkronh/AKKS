import { useState } from 'react';
import { toast } from 'react-toastify';
import { BounceLoader } from 'react-spinners';
import styles from '../styles/App.module.css'

const Contactus = () => {
  const [isLoading, setLoading] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!subject || !message) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);

    const recipientEmail = 'akksbusinessinquiry@gmail.com'; 
    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    window.open(mailtoUrl);

    setTimeout(() => {
      window.location.href = '/AKKS/';
    }, 3000);
  };

  return (
    <div className={styles.contactform}>
      <h1 className={styles.contacttitle}>Contact Us</h1>
      <form className={styles.contactform2} onSubmit={handleSubmit}>
        <input
          className={styles.contactsubject}
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          className={styles.contactmessage}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className={styles.contactbtn} type="submit">Send Email</button>
      </form>
      {isLoading && <BounceLoader color={'#123abc'} loading={isLoading} />}
    </div>
  );
};

export default Contactus;
