import React from 'react';
import PropTypes from 'prop-types';

import Degree from './Education/Degree';

const Educación = ({ data }) => (
  <div className="educación">
    <div className="link-to" id="educación" />
    <div className="title" style={{ textAlign: 'center' }}>
      <h3>Educación</h3>
    </div>
    {data.map((degree) => (
      <Degree
        data={degree}
        key={degree.school}
      />
    ))}
  </div>
);

Educación.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Educación.defaultProps = {
  data: [],
};

export default Educación;
