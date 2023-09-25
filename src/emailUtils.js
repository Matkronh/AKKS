const getAllowedEmailsFromLocalStorage = () => {
  const emails = localStorage.getItem('allowedEmails');
  return emails ? JSON.parse(emails) : [];
};

const saveAllowedEmailsToLocalStorage = (emails) => {
  localStorage.setItem('allowedEmails', JSON.stringify(emails));
};

//array som lister whitelistede emailer, kan legge til hardkodede emails her.
let allowedEmails = [
  'serz25905@gmail.com',
  'akksbusinessinquiry@gmail.com',
  'akkseiendomogholding@outlook.com',
];

const localAllowedEmails = getAllowedEmailsFromLocalStorage();
allowedEmails = [...allowedEmails, ...localAllowedEmails];

export const isEmailAllowed = (email) => {
  return allowedEmails.includes(email);
};

export const addToAllowedEmails = (email) => {
  if (!isEmailAllowed(email)) {
    allowedEmails.push(email);
    saveAllowedEmailsToLocalStorage(allowedEmails);
    return true;
  }
  return false;
};

export const removeFromAllowedEmails = (email) => {
  allowedEmails = allowedEmails.filter((allowedEmail) => allowedEmail !== email);
  saveAllowedEmailsToLocalStorage(allowedEmails);
};
