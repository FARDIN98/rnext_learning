import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

import TasksProvider from "./context/TasksContext";

export default function App() {
  return (
    <TasksProvider>
      <h1>Prague itinerary</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
