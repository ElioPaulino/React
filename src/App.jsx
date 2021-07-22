import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

const App = () =>{
//  let message = 'Hello Word!'
const [tasks, setTasks] = useState([
  {
    id: '1',
    title: 'Estudar Programação',
    completed: false,
  },
  {
    id: '2',
    title: 'Ler livros',
    completed: true,
  }
])

const handleTaskAdditional = (taskTitle) => {
    const newTask = [...tasks,{
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      }
    ];
    setTasks(newTask);
}

const handleTaskClick = (taskId) => {
  const newTask = tasks.map(task =>{
    if (task.id === taskId) return {...task, completed: !task.completed}

    return task;
  })
  setTasks(newTask);
}

const handleTaskClickDelete = (taskId) => {
  const newTask = tasks.filter((task) => task.id != taskId)
  setTasks(newTask);
}
  return (
    <>
      <div className='container'>
        <AddTask handleTaskAdditional = {handleTaskAdditional} />
        <Tasks tasks={tasks} handleTaskClick = {handleTaskClick} 
        handleTaskClickDelete={handleTaskClickDelete} />
      </div>
    
    </>
  )
} 

export default App;