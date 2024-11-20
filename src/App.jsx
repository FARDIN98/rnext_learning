import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from './data/tasks';
import { useState } from 'react';

export default function App(){
  const [tasks, setTasks] = useState(initialTasks);

  const getNextId = (data) => {
    /* array ke amra choto kore ekta value te niye ashbo mane amar porer id ta dorkar. Ekta array ke choto kore ekta value te niye ashar function hoilo reduce.  */
    const maxId = data.reduce((prev, current) => prev && prev.id > current.id ? prev.id : current.id)

    return maxId + 1;
  }

  // handlers
  const handleAddTask = (text) => {
    setTasks([
      ...tasks, 
      {
        id: getNextId(tasks),
        text: text,
        done: false
      }
    ])
  }

  const handleChangeTask = (task) => {
    const nextTasks = tasks.map(t => {
      if(t.id === task.id){
        return task
      } else{
        return t;
      }
    })
      setTasks(nextTasks)
  }

  const handleDeleteTask = (taskId) => {
      setTasks(tasks.filter(t => t.id !== taskId))
  }
  return (
    <>
      <h1>Prague itinerary</h1>

      
      <AddTask onAdd={handleAddTask}/>

      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask}/>
    </>
  )
}