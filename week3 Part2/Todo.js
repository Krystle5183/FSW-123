import React from "react";

// Accepts prop from ToDoList.js 
function Todo({todo, comp, del}) {

    const buttonStyle = {
        backgroundColor: 'rgb(230, 90, 90)',
        borderRadius: '50%',
        marginLeft: '10px'
    };

    return (

        // Sends todo items text to ToDoList.js. Makes multiple todos for each one since map is in ToDoList.js. Also adds each task with button and input box.

        // Line through style added. 

        <div style = {{textDecoration: todo.isCompleted ? 'line-through' : ''}}> 
            <input onChange = {() => comp(todo.id)} value = {todo.isCompleted} checked = {todo.isCompleted} type = 'checkbox'></input>
            {todo.text}
            <button onClick = {() => del(todo.id)} className = 'del-button' style = {buttonStyle}>X</button>
        </div>

    );
};

export default Todo;