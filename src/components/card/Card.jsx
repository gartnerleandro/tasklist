import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export const CARD_STATUS = {
  COMPLETED: 'completed',
  UNCOMPLETED: 'uncompleted',
};

const Card = ({ title, body, status }) => (
  <div className={status === CARD_STATUS.UNCOMPLETED ? 'card' : 'card completed'}>
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
    {
      status === CARD_STATUS.COMPLETED && (
        <span className="completed-message">
          COMPLETED
        </span>
      )
    }
  </div>
);

Card.defaultProps = {
  title: '',
  body: '',
  status: CARD_STATUS.UNCOMPLETED,
};

Card.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  status: PropTypes.oneOf([CARD_STATUS.COMPLETED, CARD_STATUS.UNCOMPLETED]),
};

export default Card;
