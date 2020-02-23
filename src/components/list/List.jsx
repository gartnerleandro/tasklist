import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card';

import './index.scss';

const List = ({ elements, onDeleteCard, onCardStatusChange }) => {
  if (elements && elements.length) {
    return (
      <div className="list">
        {
          elements.map((element) => (
            <Card
              element={element}
              key={element.id}
              onDelete={() => onDeleteCard(element.id)}
              onStatusChange={() => onCardStatusChange(element.id, element.status)}
            />
          ))
        }
      </div>
    );
  }

  return (
    <div className="list">
      No elements found
    </div>
  );
};

List.defaultProps = {
  elements: [],
  onDeleteCard: () => true,
  onCardStatusChange: () => true,
};

List.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  onDeleteCard: PropTypes.func,
  onCardStatusChange: PropTypes.func,
};

export default List;
