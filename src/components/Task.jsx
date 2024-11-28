/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTasksDispatch } from "../context/TasksContext";
export default function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useTasksDispatch();

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value
              }
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <>
      <li>
        <label htmlFor="">
          <input
            type="Checkbox"
            checked={task.done}
            onChange={(e) => {
              dispatch({
                type: "changed",
                task: {
                  ...task,
                  done: e.target.checked
                }
              });
            }}
          />

          {taskContent}

          <button
            onClick={() =>
              dispatch({
                type: "deleted",
                taskId: task.id,
              })
            }
          >
            Delete
          </button>
        </label>
      </li>
      <br />
    </>
  );
}