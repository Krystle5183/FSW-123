import React, { useState } from 'react';

function TodoForm({ add }) {
    
    const [input, setInput] = useState('');

    const getUserInput = (input) => {
        setInput(input.currentTarget.value);
    };

    const submit = (sub) => {
        sub.preventDefault();
        add(input);
        setInput('');    
    }

return (
        <>
            <form onSubmit = {submit}>
                <input className = 'input-field' value = {input} type = 'text' onChange = {getUserInput} placeholder = 'Add tasks...' required></input>
                <button className = 'submit-button'>Submit</button>
            </form>
        </>
    );
}

export default TodoForm;