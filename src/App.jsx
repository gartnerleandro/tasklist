import React, { useState } from 'react';
import List from './components/list/List';

import { CARD_STATUS } from './components/card';
import Modal from './components/modal/Modal';

import './index.scss';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tasks, setTasks] = useState([
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
  ]);

  const onDeleteCard = (cardId) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.id === cardId);

    if (taskIndex > -1) {
      newTasks.splice(taskIndex, 1);
      setTasks(newTasks);
    }
  };

  const onCardStatusChange = (cardId, prevStatus) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.id === cardId);
    const nextStatus = prevStatus === CARD_STATUS.UNCOMPLETED ? CARD_STATUS.COMPLETED
      : CARD_STATUS.UNCOMPLETED;

    if (taskIndex > -1) {
      newTasks[taskIndex].status = nextStatus;
      setTasks(newTasks);
    }
  };

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
    const newTasks = [...tasks];
    newTasks.push({
      id: tasks.length + tasks.length + 1,
      title,
      body,
      status: CARD_STATUS.UNCOMPLETED,
    });
    setTasks(newTasks);
    closeModal();
  };

  return (
    <div className="app">
      <div className="header">
        <button onClick={openModal} type="button">
          Add new
        </button>
      </div>

      <List elements={tasks} onCardStatusChange={onCardStatusChange} onDeleteCard={onDeleteCard} />
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
