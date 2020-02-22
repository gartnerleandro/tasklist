import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card';

import './index.scss';

const List = ({ elements }) => {
  if (elements && elements.length) {
    return (
      <div className="list">
        {
          elements.map((element) => (
            <Card
              title={element.title}
              body={element.body}
              key={element.id}
              status={element.status}
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
};

List.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
};

export default List;
