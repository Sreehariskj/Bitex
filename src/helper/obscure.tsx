export const obscureEmail = (email = '') => {
  console.log('emai', email);
  const [name, domain] = email.split('@');
  if (!!name && !!domain) {
    return `${name.substring(0, 3)}${new Array(name.length).join(
      '*',
    )}@${domain}`;
  } else {
    return '';
  }
};
