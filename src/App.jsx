import React from 'react';
import List from './components/list/List';

const taks = [
  {
    id: 1,
    title: 'fist',
    body: 'fist body',
  },
  {
    id: 2,
    title: 'second',
    body: 'second body',
  },
  {
    id: 3,
    title: 'third',
    body: 'third body',
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
