import './App.css';
import React from 'react'
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from 'react-icons/md';
import { FaRegTrashCan } from "react-icons/fa6";

function App() {
  const [theme, setTheme] = React.useState('blue');
  const [tasks, setTasks] = React.useState(JSON.parse(localStorage.getItem('tasksArr')) || []);
  const inputValue = React.useRef();

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const addTask = () => {
    const newTask = inputValue.current.value;
    if (newTask !== '') {
      const updatedTasks = [
        { task: newTask, completed: false },
        ...tasks
      ];
      setTasks(updatedTasks);
      localStorage.setItem('tasksArr', JSON.stringify(updatedTasks));
      inputValue.current.value = '';
      inputValue.current.focus();
    }
  }

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    localStorage.setItem('tasksArr', JSON.stringify(updatedTasks));
  }

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem('tasksArr', JSON.stringify(updatedTasks));
  }

  return (
    <main className={`${theme}`}>
      <ul className='themes'>
        <li className="theme-button blue" onClick={() => changeTheme('blue')}></li>
        <li className="theme-button light" onClick={() => changeTheme('light')}></li>
        <li className="theme-button dark" onClick={() => changeTheme('dark')}></li>
      </ul>
      <h1 className={`${theme}`}>Todo List</h1>
      <div className="inputs">
        <input ref={inputValue} type="text" />
        <button onClick={addTask} className={`${theme}`}>Add</button>
      </div>
      <ul className="dots">
        <li className={`${theme}`}></li><li className={`${theme}`}></li><li className={`${theme}`}></li>
      </ul>
      <ul className="tasks">
        {tasks.map((task, index) => (
          <li key={index}>
            <p className={task.completed ? 'completed-task' : ''}>{task.task}</p>
            <div className={`task-functions`}>
              {task.completed ?
                <MdOutlineCheckBox className='completed' onClick={() => { toggleTaskCompletion(index) }} /> :
                <MdCheckBoxOutlineBlank className='not-completed' onClick={() => { toggleTaskCompletion(index) }} />}
              <FaRegTrashCan className='trash-icon' onClick={() => deleteTask(index)} />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
