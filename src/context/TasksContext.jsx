/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useImmerReducer } from "use-immer";
import taskReducer from '../reducers/taskReducer';
import { initialTasks } from "../data/tasks";
import { useContext } from 'react';

export const TaskContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export default function TasksProvider({ children }) {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);
  return (
    <TaskContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>{children}</TasksDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

export function useTasks(){
  return useContext(TaskContext);
}

export function useTasksDispatch(){
  return useContext(TasksDispatchContext);
}
