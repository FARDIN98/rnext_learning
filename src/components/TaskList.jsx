/* eslint-disable react/prop-types */
import Task from "./Task";

export default function TaskList({tasks, onChangeTask, onDeleteTask}) {
  return (
    <ul>
      {
        tasks.map(task => <Task onChangeTask={onChangeTask} onDeleteTask={onDeleteTask} key={task.id} task={task} />)
      }
    </ul>
  );
}
