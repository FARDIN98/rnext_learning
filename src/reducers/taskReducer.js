// 1st parameter is current state, which is tasks
// 2nd parameter is action
export default function taskReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
          ...tasks,
          {
            id: action.id,
            text: action.text,
            done: false,
          },
        ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.taskId);
    }
    default: {
      throw Error(`No action matched with ${action.type}`);
    }
  }
}
