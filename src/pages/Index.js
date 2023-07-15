import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={'Página personal de Adrian Dosal Amor. Ingeniero de Datos en la nube, '
      + 'actualmente trabaja para Hiberus y alumni de la Universidad de Valencia.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Acerca de esta página</Link></h2>
          <p>
            Una sencilla página personal en React con Javascript.
            {/* You are running this application in{process.env.NODE_ENV} */}
          </p>
        </div>
      </header>
      <p> Bienvenido a mi página web. Puedes leer más en <Link to="/about">sobre mí</Link>,
        o puedes mirar mi {' '}
        <Link to="/resume">curriculum</Link>, {' '}
        <Link to="/projects">proyectos</Link>, {' '}
        {/* view <Link to="/stats">site statistics</Link>, {' '} */}
        o <Link to="/contact">contactarme</Link>.
      </p>
      <p>El código de la página disponible <a href="https://github.com/AdrDosal/personal-site">aquí</a>.</p>
    </article>
  </Main>
);

export default Index;
