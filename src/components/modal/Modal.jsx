import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Modal = ({ showModal, children, onClose }) => {
  if (showModal) {
    return (
      <div className="overlay">
        <div className="modal">
          <button onClick={onClose} type="button" className="close-modal">
            <i className="fas fa-times" />
          </button>
          {children}
        </div>
      </div>
    );
  }

  return <></>;
};

Modal.defaultProps = {
  showModal: false,
  children: null,
};

Modal.propTypes = {
  showModal: PropTypes.bool,
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
