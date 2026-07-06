import { useState } from 'react'
import './App.css'
import Header from './components/Headers'
import Form from './components/Form'
import TableTask from './components/Table-task'
import FilterButton from './components/Filter-button'
import SearchTask from './components/Search-task'

// основной компонент куда добавляю маленькие компоненты

function App() {

  // создаю хук для хранения состояние задач
  const [tasks, setTasks] = useState([]);
    // создаю хук для хранения состояния фильтров
  const [filter, setFilter] = useState('all');
  // создаю хук для хранения текста поиска
  const [searchText, setSearchText] = useState('');

  // создаю функцию для добавления задач
  const addTask = (textTask) => {
    const newTask = {
      id: Date.now(),
      text: textTask,
      completed: false
    };
    setTasks(currentTask => [...currentTask, newTask]);

  }

  // создаю функцию для передачи в SearchTask
  const handleSearchChange = (text) => {
    setSearchText(text)
  }

  // создаю обработчик изменения фильтра 
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
  }

  // создаю фильтр по задачам
  const filteredTasks = () => {
    return tasks.filter((task) => {
      const status = 
        filter === 'all' || 
        filter === 'completed' && task.completed ||
        filter === 'not completed' && !task.completed;

    const searchStatus = searchText ? task.text.toLowerCase().includes(searchText.toLowerCase()) : true;

    return status && searchStatus;
    })
  }

  return (
    <div className='App'>
      <Header/>
      <Form onAddTask = {addTask}/>
      <SearchTask onSearchChange={handleSearchChange}/>
      <FilterButton onFilterChange={handleFilterChange}/>
      <TableTask tasks = {filteredTasks()}/>
  </div>
  )
  
}

export default App