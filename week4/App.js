import React, { useDebugValue, useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import todo from './Store';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  
  const [toDos, setTodos] = useState(todo); 

  const completeTodo = (id) => {
    
    let copyArray1 = [...toDos];

    const findMatchingId = copyArray1.find((task) => task.id === id);
    findMatchingId.isCompleted = !findMatchingId.isCompleted;

    setTodos(copyArray1);
  };

  const deleteTodo = (id) => {
    
    let copyArray2 = [...toDos];
    
    let deleteTask = copyArray2.filter((task) => task.id !== id);
    setTodos(deleteTask);
  };

  const addTodo = (input) => {
    
    let copyArray3 = [...toDos];
    
    copyArray3.push({
      id: uuidv4(),
      text: input,
      isCompleted: ''
    });
    
    setTodos(copyArray3);
  };


  return (
    
    <>
      <h1>To do list:</h1>
      <TodoForm add = {addTodo}/>
      <ToDoList toDoList = {toDos} comp = {completeTodo} del = {deleteTodo}/>
    </>
  );
}

export default App;