// 1st parameter is current state, which is draft. it is a property of immer. we can mutate array.But behind the scene draft will make array immutable
// 2nd parameter is action
export default function taskReducer(draft, action) {
  switch (action.type) {
    case "added": {
        draft.push({
            id: action.id,
            text: action.text,
            done: false,
        });
        break;
    }
    case "changed": {
        const index = draft.findIndex(t => t.id === action.task.id)
        draft[index] = action.task;
        break; 
    };
    case "deleted": {
      return draft.filter((t) => t.id !== action.taskId);
    }
    default: {
      throw Error(`No action matched with ${action.type}`);
    }
  }
}
