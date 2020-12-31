
export const ADD_TODO = 'ADD_TODO';

export function addToDo(title, description, priority, completed) {
  return {
    type: ADD_TODO,
    toDoItem: {
      _id: (new Date().getTime()),
      title,
      description,
      priority,
      completed
    }
  };
}