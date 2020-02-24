import React from 'react';
import PropTypes from 'prop-types';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import Card from '../card';

import './index.scss';

const List = ({ elements, onDeleteCard, onCardStatusChange }) => {
  if (elements && elements.length) {
    return (
      <TransitionGroup className="list">
        {
          elements.map((element) => (
            <CSSTransition
              key={element.id}
              timeout={500}
              appear
              enter
              exit
              unmountOnExit
            >
              <Card
                element={element}
                key={element.id}
                onDelete={() => onDeleteCard(element.id)}
                onStatusChange={() => onCardStatusChange(element.id, element.status)}
              />
            </CSSTransition>
          ))
        }
      </TransitionGroup>
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
