import React from 'react';
import PropTypes from 'prop-types';

import { CARD_STATUS } from '../card';

import './index.scss';

const Filters = ({ onFilterChange, selectedFilter }) => (
  <div className="filters">
    <div className="filters-label">
      Filter by:
    </div>
    <div className="buttons-wrapper">
      <button
        onClick={() => onFilterChange(null)}
        type="button"
        className={!selectedFilter ? 'filter-button selected' : 'filter-button'}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange(CARD_STATUS.COMPLETED)}
        type="button"
        className={selectedFilter === CARD_STATUS.COMPLETED ? 'filter-button selected' : 'filter-button'}
      >
        Completed
      </button>
      <button
        onClick={() => onFilterChange(CARD_STATUS.UNCOMPLETED)}
        type="button"
        className={selectedFilter === CARD_STATUS.UNCOMPLETED ? 'filter-button selected' : 'filter-button'}
      >
        Uncompleted
      </button>
    </div>
  </div>
);

Filters.defaultProps = {
  onFilterChange: null,
  selectedFilter: null,
};

Filters.propTypes = {
  onFilterChange: PropTypes.func,
  selectedFilter: PropTypes.string,
};

export default Filters;
