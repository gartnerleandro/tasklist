import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Card = ({ title, body }) => (
  <div className="card">
    {
      !!title && (
        <div className="card-title">
          {title}
        </div>
      )
    }
    {
      !!body && (
        <div className="card-body">
          {body}
        </div>
      )
    }
  </div>
);

Card.defaultProps = {
  title: '',
  body: '',
};

Card.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default Card;
