import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from './data/tasks';
import { useReducer } from 'react';
import taskReducer from "./reducers/taskReducer";


export default function App(){
  const [tasks, dispatch] = useReducer( taskReducer, initialTasks);

  const getNextId = (data) => {
    /* array ke amra choto kore ekta value te niye ashbo mane amar porer id ta dorkar. Ekta array ke choto kore ekta value te niye ashar function hoilo reduce.  */
    const maxId = data.reduce((prev, current) => prev && prev.id > current.id ? prev.id : current.id)

    return maxId + 1;
  }

  // handlers
  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      text,
      id: getNextId(tasks),
    })
  }

  const handleChangeTask = (task) => {
    dispatch({
      type: "changed",
      task //task: task
    })
  }

  const handleDeleteTask = (taskId) => {
      dispatch({
        type: "deleted",
        taskId: taskId //taskId = taskId
      })
  }
  return (
    <>
      <h1>Prague itinerary</h1>

      
      <AddTask onAdd={handleAddTask}/>

      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask}/>
    </>
  )
}