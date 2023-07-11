import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const Experiencia = ({ data }) => (
  <div className="experiencia">
    <div className="link-to" id="experiencia" />
    <div className="title" style={{ textAlign: 'center' }}>
      <h3>Experiencia</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={`${job.name}-${job.position}`}
      />
    ))}
  </div>
);

Experiencia.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string,
    position: PropTypes.string,
    url: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
    summary: PropTypes.string,
  })),
};

Experiencia.defaultProps = {
  data: [],
};

export default Experiencia;
