import React from 'react';
import List from './components/list/List';

import { CARD_STATUS } from './components/card';

const taks = [
  {
    id: 1,
    title: 'fist',
    body: 'fist body',
    status: CARD_STATUS.COMPLETED,
  },
  {
    id: 2,
    title: 'second',
    body: 'second body',
    status: CARD_STATUS.UNCOMPLETED,
  },
  {
    id: 3,
    title: 'third',
    body: 'third body',
    status: CARD_STATUS.COMPLETED,
  },
];

const App = () => (
  <div className="app">
    <p>
      Hello World!
    </p>

    <List elements={taks} />
  </div>
);

export default App;
