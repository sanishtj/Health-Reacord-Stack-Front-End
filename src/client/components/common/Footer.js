import React from 'react';

const Footer = () => (
  <footer className="whitecontainercolor">
    <section className="copyright">
Copyright ©
      {' '}
      {(new Date().getFullYear())}
      {' '}
Health Record Stack
    </section>
  </footer>
);

export default Footer;
