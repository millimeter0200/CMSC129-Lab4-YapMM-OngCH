import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/tasks"
      );

      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app-container">
      <div className="todo-card">
        <h1 className="app-title">
          Minimal Task Tracker
        </h1>

        <p className="app-subtitle">
          Organize your tasks with clarity and focus.
        </p>

        <TaskForm />

        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;