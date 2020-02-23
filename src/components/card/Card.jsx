import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../dropdown';

import './index.scss';

export const CARD_STATUS = {
  COMPLETED: 'completed',
  UNCOMPLETED: 'uncompleted',
};

const Card = ({
  title,
  body,
  status,
  onDelete,
  onStatusChange,
}) => (
  <div className={status === CARD_STATUS.UNCOMPLETED ? 'card' : 'card completed'}>
    <Dropdown>
      {
        !!onDelete && (
          <button type="button" onClick={onDelete} className="delete-button">
            <i className="fas fa-trash" />
            Delete
          </button>
        )
      }
      {
        !!onStatusChange && (
          <button type="button" onClick={onStatusChange} className="delete-button">
            {
              status === CARD_STATUS.UNCOMPLETED ? (
                <i className="fas fa-check" />
              ) : (
                <i className="fas fa-times" />
              )
            }
            {status === CARD_STATUS.UNCOMPLETED ? 'Completed' : 'Uncompleted'}
          </button>
        )
      }
    </Dropdown>
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
  onDelete: null,
  onStatusChange: null,
};

Card.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  status: PropTypes.oneOf([CARD_STATUS.COMPLETED, CARD_STATUS.UNCOMPLETED]),
  onDelete: PropTypes.func,
  onStatusChange: PropTypes.func,
};

export default Card;
