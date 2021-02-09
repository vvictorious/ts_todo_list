import React from 'react';
import TodoListItem from './TodoListItem'

const todos: Array<Todo> = [
  {
    text: 'Walk the dog',
    complete: true
  },
  {
    text: 'Work out',
    complete: false
  }  
]

const App = () => {
  return (
    <TodoListItem todo={todos[0]} />
  );
}

export default App;
