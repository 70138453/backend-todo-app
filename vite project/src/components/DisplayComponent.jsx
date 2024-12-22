import React from 'react';

const DisplayComponent = ({ tasks, handleDeleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.name}</h3>
          <p>{task.detail}</p>
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default DisplayComponent;
