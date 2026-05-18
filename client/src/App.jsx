import "./App.css";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
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

        <TaskList />

      </div>
    </div>
  );
}

export default App;

