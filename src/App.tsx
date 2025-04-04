import React, { useState } from 'react';
import './App.css';

interface Task {
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  // Add a new task
  const addTask = () => {
    if (newTask.trim()) {
      const newTaskObj: Task = { text: newTask, completed: false };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  // Toggle task completion (change color to green if completed)
  const toggleCompletion = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Delete a task
  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <input
        type="text"
        placeholder="Add new task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={task.completed ? 'completed' : ''}
            style={{
              backgroundColor: task.completed ? 'lightgreen' : 'white',
              transition: 'background-color 0.3s ease',
            }}
          >
            {task.text}
            <div>
              <button onClick={() => toggleCompletion(index)}>✔</button>
              <button onClick={() => deleteTask(index)}>❌</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
