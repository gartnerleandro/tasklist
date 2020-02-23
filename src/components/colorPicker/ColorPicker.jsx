import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../dropdown/Dropdown';

import './index.scss';

const defaultColor = '#FFFFFF';

const ColorPicker = ({ colors, onSelectColor }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const onClickColor = (color) => {
    onSelectColor(color);
    setSelectedColor(color);
  };

  const renderButton = (onClick) => (
    <button
      type="button"
      label={selectedColor}
      className="selected-color"
      style={{ backgroundColor: selectedColor }}
      onClick={onClick}
    />
  );

  return (
    <div className="color-picker">
      <Dropdown
        renderCustomButton={renderButton}
        useCustomButton
        useCustomContent
      >
        <i className="fas fa-caret-up arrow" style={{ color: selectedColor || '#8e8e8e' }} />
        <div className="picker-content" style={{ backgroundColor: selectedColor || defaultColor, borderColor: selectedColor || defaultColor }}>
          <div className="selected-color-label" style={{ color: selectedColor ? '#FFFFFF' : '#8e8e8e' }}>
            {selectedColor || 'No color selected'}
          </div>
          <div className="colors-list">
            <button
              type="button"
              label="noColor"
              className="color-button"
              style={{
                backgroundColor: 'transparent',
                borderColor: 'transparent',
              }}
              onClick={() => onClickColor(null)}
            >
              <i className="fas fa-times" />
            </button>
            {colors.map((color) => (
              <button
                key={color}
                type="button"
                label={color}
                className="color-button"
                style={{
                  backgroundColor: color,
                  borderColor: color,
                }}
                onClick={() => onClickColor(color)}
              />
            ))}
          </div>
        </div>
      </Dropdown>
    </div>
  );
};

ColorPicker.defaultProps = {
  colors: ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#DCE775', '#FF8A65', '#BA68C8'],
  onSelectColor: () => true,
};

ColorPicker.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  onSelectColor: PropTypes.func,
};

export default ColorPicker;
