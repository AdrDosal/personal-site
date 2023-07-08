import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Adrian Dosal</h2>
        <p><a href="mailto:adriandosal@gmail.com">adriandosal@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hola, soy Adrian Dosal. Graduado en la <a href="https://www.uv.es/">Universidad de Valencia</a>
        e Ingeniero de Datos en Azure en <a href="https://www.hiberus.com/">Hiberus Tecnología</a>.
        Anteriormente he trabajado para <a href="https://bahiasoftware.es">Bahía Software</a> y para
        <a href="https://www.capgemini.com/es-es/"> Capgemini</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Aprende más</Link> : <Link to="/about" className="button">Sobre mí</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      {/* <p className="copyright">&copy; Michael D&apos;Angelo
      <Link to="/">mldangelo.com</Link>.</p> */}
    </section>
  </section>
);

export default SideBar;
