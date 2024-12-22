import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormComponent from './components/FormComponent';
import DisplayComponent from './components/DisplayComponent';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from backend
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/tasks/')
      .then((response) => setTasks(response.data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  // Add task handler
  const handleAddTask = (name, detail) => {
    const newTask = { name, detail };
    axios.post('http://127.0.0.1:8000/api/tasks/', newTask)
      .then((response) => setTasks([...tasks, response.data]))
      .catch((error) => console.error('Error adding task:', error));
  };

  // Delete task handler
  const handleDeleteTask = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/tasks1/${id}/`)
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== id));
      })
      .catch((error) => console.error('Error deleting task:', error));
  };

  return (
    <div>
      <h1>To-Do App</h1>
      <h3>Please enter your task</h3>
      <FormComponent handleAddTask={handleAddTask} />
      <DisplayComponent tasks={tasks} handleDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default App;
