import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../dropdown';

import './index.scss';

export const CARD_STATUS = {
  COMPLETED: 'completed',
  PENDING: 'pending',
};

const Card = ({
  element,
  onDelete,
  onStatusChange,
}) => {
  const {
    status, title, body, color,
  } = element;

  return (
    <div
      className={status === CARD_STATUS.PENDING ? 'card' : 'card completed'}
      style={color && status === CARD_STATUS.PENDING ? {
        borderLeft: `8px solid ${color}`,
        borderColor: color,
      } : {}}
    >
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
            <button type="button" onClick={onStatusChange} className="status-button">
              {
                status === CARD_STATUS.PENDING ? (
                  <i className="fas fa-check" />
                ) : (
                  <i className="fas fa-times" />
                )
              }
              {status === CARD_STATUS.PENDING ? 'Complete' : 'Pending'}
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
};

Card.defaultProps = {
  element: {},
  onDelete: null,
  onStatusChange: null,
};

Card.propTypes = {
  element: PropTypes.exact({
    id: PropTypes.number,
    status: PropTypes.oneOf([CARD_STATUS.COMPLETED, CARD_STATUS.PENDING]).isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    color: PropTypes.string,
  }),
  onDelete: PropTypes.func,
  onStatusChange: PropTypes.func,
};

export default Card;
