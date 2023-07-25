import { useState } from 'react';
import { addToAllowedEmails } from '../emailUtils';
import styles from '../styles/App.module.css'

const EmailAddForm = () => {
  const [newEmail, setNewEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newEmail) {
      alert('Please enter a valid email address.');
      return;
    }

    const emailAdded = addToAllowedEmails(newEmail);
    //adder email til email array som whitelister den
    if (emailAdded) {
      setNewEmail(''); 
      setSuccessMessage('Email has been added to the whitelist.');
    } else {
      alert('Email is already allowed.');
    }
  };

  const handleClearWhitelist = () => {
    //fjerner whitelistet email fra local storage
    localStorage.removeItem('allowedEmails');
    alert('Whitelisted emails cleared successfully.');
    window.location.reload();
  };

  return (
    <div className={styles.accessRequestForm}>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <button type="submit">Add Email(local storage only for testing purposes)</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      <button type="button" onClick={handleClearWhitelist}>
        Clear my whitelisted email and log me out
      </button>
    </div>
  );
};

export default EmailAddForm;
