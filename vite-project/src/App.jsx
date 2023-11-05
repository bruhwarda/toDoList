// App.js

import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";
import { useState,useEffect } from "react";

function App() {
  const [inputString, setInputString] = useState("");
  const [task, setTask] = useState(JSON.parse(localStorage.getItem('tasks')) || [
    { task: "Task1", isChecked: true },
    { task: "Task2", isChecked: false },
    { task: "Task3", isChecked: false }
  ]);

  
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTask(savedTasks);
    }
  }, []);

  return (
    <>
    <div className="  bg-gray-400 min-h-screen place-items-center">
    <AddTask setTask={setTask} task={task} inputString={inputString} setInputString={setInputString} />
      <TaskList task={task} setTask={setTask} inputString={inputString} setInputString={setInputString} />
    </div>
     
    </>
  );
}

export default App;
