import React, { useState, useEffect } from 'react';
import List from './components/list/List';

import { CARD_STATUS } from './components/card';
import Modal from './components/modal/Modal';
import Filters from './components/filters/Filters';
import ColorPicker from './components/colorPicker/ColorPicker';

import './index.scss';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [color, setColor] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Code',
      body: 'Create my own app',
      status: CARD_STATUS.COMPLETED,
      color: '#D9E3F0',
    },
    {
      id: 2,
      title: 'Sleep',
      body: 'Go to sleep at 00:00',
      status: CARD_STATUS.PENDING,
      color: '#D9E3F0',
    },
    {
      id: 3,
      title: 'Play the piano',
      body: 'Piano lesson at 12:30',
      status: CARD_STATUS.COMPLETED,
      color: '#D9E3F0',
    },
  ]);

  useEffect(() => {
    let newTasks = [...tasks];

    if (selectedFilter) {
      newTasks = tasks.filter((task) => task.status === selectedFilter);
    }

    setFilteredTasks(newTasks);
  }, [selectedFilter, tasks]);

  const onDeleteCard = (cardId) => {
    const newTasks = [...filteredTasks];
    const taskIndex = newTasks.findIndex((task) => task.id === cardId);

    if (taskIndex > -1) {
      newTasks.splice(taskIndex, 1);
      setTasks(newTasks);
    }
  };

  const onCardStatusChange = (cardId, prevStatus) => {
    const newTasks = [...filteredTasks];
    const taskIndex = newTasks.findIndex((task) => task.id === cardId);
    const nextStatus = prevStatus === CARD_STATUS.PENDING ? CARD_STATUS.COMPLETED
      : CARD_STATUS.PENDING;

    if (taskIndex > -1) {
      newTasks[taskIndex].status = nextStatus;
      setTasks(newTasks);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setTitle('');
    setBody('');
    setColor(null);
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
      status: CARD_STATUS.PENDING,
      color,
    });
    setTasks(newTasks);
    closeModal();
  };

  return (
    <div className="app">
      <div className="header">
        <Filters
          onFilterChange={setSelectedFilter}
          selectedFilter={selectedFilter}
        />
      </div>
      <List
        elements={filteredTasks}
        onCardStatusChange={onCardStatusChange}
        onDeleteCard={onDeleteCard}
      />
      <Modal showModal={showModal} onClose={closeModal}>
        <div className="modal-content">
          <div className="section">
            <input placeholder="Title" value={title} onChange={onTitleChange} />
          </div>
          <div className="color-section">
            <span className="task-color-label">
              Task color:
            </span>
            <ColorPicker onSelectColor={setColor} />
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
      <button onClick={openModal} type="button" className="add-button">
        <i className="fas fa-plus" />
      </button>
    </div>
  );
};

export default App;
