import React, { useState } from 'react';
import List from './components/list/List';

import { CARD_STATUS } from './components/card';
import Modal from './components/modal/Modal';

import './index.scss';

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

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const closeModal = () => {
    setShowModal(false);
    setTitle('');
    setBody('');
  };

  const openModal = () => {
    setShowModal(true);
  };

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onBodyChange = (event) => {
    setBody(event.target.value);
  };

  const onAddNew = () => {
    taks.push({
      id: taks.length + 1,
      title,
      body,
      status: CARD_STATUS.UNCOMPLETED,
    });
    closeModal();
  };

  return (
    <div className="app">
      <div className="header">
        <button onClick={openModal} type="button">
          Add new
        </button>
      </div>

      <List elements={taks} />
      <Modal showModal={showModal} onClose={closeModal}>
        <div className="modal-content">
          <div className="section">
            <input placeholder="Title" value={title} onChange={onTitleChange} />
          </div>
          <div className="section">
            <textarea
              placeholder="Content"
              value={body}
              onChange={onBodyChange}
              rows={5}
            />
          </div>
          <div className="section">
            <button
              onClick={onAddNew}
              type="button"
              className="add"
              disabled={!title || !body}
            >
              Add
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default App;
