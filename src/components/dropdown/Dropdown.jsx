import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Dropdown = ({
  children,
  useCustomContent,
  useCustomButton,
  renderCustomButton,
}) => {
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
      {
        !useCustomButton ? (
          <button type="button" onClick={toggleMenu} className="menu-button">
            <i className="fas fa-ellipsis-v" />
          </button>
        ) : (
          renderCustomButton(toggleMenu)
        )
      }
      {
        showMenu && !useCustomContent && (
          <>
            <i className="fas fa-caret-up" />
            <div className="dropdown-content">
              {children}
            </div>
          </>
        )
      }
      {
        showMenu && useCustomContent && (
          children
        )
      }
    </div>
  );
};

Dropdown.defaultProps = {
  children: null,
  renderCustomButton: null,
  useCustomButton: false,
  useCustomContent: false,
};

Dropdown.propTypes = {
  children: PropTypes.node,
  renderCustomButton: PropTypes.func,
  useCustomButton: PropTypes.bool,
  useCustomContent: PropTypes.bool,
};

export default Dropdown;
