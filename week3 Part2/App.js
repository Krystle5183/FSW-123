import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import todo from './Store';

function App() {
  
  
  const [toDos, setTodos] = useState(todo); 

  const completeTodo = (id) => {
    
    let copyArray1 = [...toDos];

    const findMatchingId = copyArray1.find((task) => task.id === id);
    findMatchingId.isCompleted = !findMatchingId.isCompleted;

    setTodos(copyArray1);
  };

  const deleteTodo = (id) => {
    // Copies array of tasks.
    let copyArray2 = [...toDos];
    // Filters through copied array to see if ids DO NOT match. Returns it.
    let deleteTask = copyArray2.filter((task) => task.id !== id);
    setTodos(deleteTask);
  };


  return (
    
    <>
      <ToDoList toDoList = {toDos} comp = {completeTodo} del = {deleteTodo}/>

    </>
  );
}

export default App;