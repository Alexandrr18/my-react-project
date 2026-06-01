import { useState } from 'react'
import './App.css'
import Header from './components/Headers'
import Form from './components/Form'
import TableTask from './components/Table-task'

// основной компонент куда добавляю маленькие компоненты

function App() {

  // создаю хук для хранения состояние задач и создаю функцию для добавления задач
  const [tasks, setTasks] = useState([]);

  const addTask = (textTask) => {
    const newTask = {
      id: Date.now(),
      text: textTask,
      completed: false
    };
    setTasks(currentTask => [...currentTask, newTask]);

  }

  return (
    <div className='App'>
      <Header/>
      <Form onAddTask = {addTask}/>
      <TableTask tasks = {tasks}/>
  </div>
  )
  
}

export default App