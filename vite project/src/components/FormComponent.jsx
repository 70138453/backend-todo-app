import React, { useState } from 'react';

const FormComponent = ({ handleAddTask }) => {
  const [name, setName] = useState('');
  const [detail, setDetail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddTask(name, detail);
    setName('');
    setDetail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Task Name: </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor="detail">Task Detail: </label>
      <input
        type="text"
        id="detail"
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
      />
      <br />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default FormComponent;
