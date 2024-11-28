
import { useState } from "react";
import { useTasks, useTasksDispatch } from "../context/TasksContext";
import { getNextId } from "../utils/getNextId";
const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();
  const tasks = useTasks();

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input placeholder="Add text" value={text} onChange={handleChangeText} />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            text,
            id: getNextId(tasks)
          });
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddTask;
