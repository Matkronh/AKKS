const allowedEmails = [
  'serz25905@gmail.com',
  /* 'mats.kodehode@gmail.com', */
  //legge til flere mails her
];

export const isEmailAllowed = (email) => {
  return allowedEmails.includes(email)
};