import React from 'react';
import { Link } from 'react-router-dom';

const Referencias = () => (
  <div className="references">
    <div className="link-to" id="referencias" />
    <div className="title">
      <Link to="/contact">
        <h3>Contactar para obtener referencias</h3>
      </Link>
    </div>
  </div>
);

export default Referencias;
