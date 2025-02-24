// src/EventModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const EventModal = ({ isOpen, onRequestClose, onAddEvent, selectedSlot }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title,
      description,
      start: selectedSlot.start,
      end: selectedSlot.end,
    };
    onAddEvent(newEvent);
    setTitle('');
    setDescription('');
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Add Event</button>
        <button type="button" onClick={onRequestClose}>
          Cancel
        </button>
      </form>
    </Modal>
  );
};

export default EventModal;