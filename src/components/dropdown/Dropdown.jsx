import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Dropdown = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = useCallback(() => {
    setShowMenu(false);

    document.removeEventListener('click', closeMenu);
  }, []);

  const openMenu = useCallback(() => {
    setShowMenu(true);

    document.addEventListener('click', closeMenu);
  }, [closeMenu]);

  useEffect(() => () => {
    document.removeEventListener('click', closeMenu);
  }, [closeMenu]);


  const toggleMenu = (event) => {
    if (event) {
      event.preventDefault();
    }

    if (showMenu) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  return (
    <div className="menu-wrapper">
      <button type="button" onClick={toggleMenu} className="menu-button">
        <i className="fas fa-ellipsis-v" />
      </button>
      {
        showMenu && (
          <>
            <i className="fas fa-caret-up" />
            <div className="dropdown-content">
              {children}
            </div>
          </>
        )
      }
    </div>
  );
};

Dropdown.defaultProps = {
  children: null,
};

Dropdown.propTypes = {
  children: PropTypes.node,
};

export default Dropdown;
