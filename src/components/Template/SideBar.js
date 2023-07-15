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
      {/* <h2>Sobre</h2> */}
      <p>Hola, soy Adrian Dosal. Graduado en la <a href="https://www.uv.es/">Universidad de Valencia </a>
        e Ingeniero de Datos en Azure. Trabajo actualmente en <a href="https://www.hiberus.com/">Hiberus Tecnología</a> y
        anteriormente he trabajado para <a href="https://bahiasoftware.es">Bahía Software</a> y
        <a href="https://www.capgemini.com/es-es/"> Capgemini</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Curriculum</Link> : <Link to="/about" className="button">Sobre mí</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
