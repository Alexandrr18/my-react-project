import { useState } from 'react'
import './App.css'
import Header from './components/Headers'
import Form from './components/Form'
import TableTask from './components/Table-task'
import FilterButton from './components/Filter-button'

// основной компонент куда добавляю маленькие компоненты

function App() {

  // создаю хук для хранения состояние задач
  const [tasks, setTasks] = useState([]);
    // создаю хук для хранения состояния фильтров
  const [filter, setFilter] = useState('all');

  // создаю функцию для добавления задач
  const addTask = (textTask) => {
    const newTask = {
      id: Date.now(),
      text: textTask,
      completed: false
    };
    setTasks(currentTask => [...currentTask, newTask]);

  }

  // создаю обработчик изменения фильтра 
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
  }

  const filteredTasks = () => {

    if (filter === "all") {
      return tasks;
    } else if (filter === "completed") {
      return tasks.filter(task => task.completed === true)
    } else if (filter === "not completed") {
      return tasks.filter(task => task.completed === false)
    }
  }

  return (
    <div className='App'>
      <Header/>
      <Form onAddTask = {addTask}/>
      <FilterButton onFilterChange={handleFilterChange}/>
      <TableTask tasks = {filteredTasks()}/>
  </div>
  )
  
}

export default App