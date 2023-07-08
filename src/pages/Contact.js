import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contacta Adrian Dosal a través de email  @ adriandosal@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contacta</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Sientete libre de contactar por email a: </p>
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
