import { useState } from 'react';

function Budget({ allExpenses, spent, budget, remaining }) {

    const [input, setInput] = useState('');

    const getInput = (e) => {
        setInput(e.currentTarget.value);
    };

    const submit = (e) => {
        e.preventDefault();
        allExpenses(input);
        setInput(input);
    };

    return (
        <>
            <div className = 'budget-wrapper'>
                <div className = 'budget'>Budget: &#36;{input}
                    <form onSubmit = {submit}>
                    <input
                        type = 'number'
                        placeholder = 'Enter Budget'
                        onChange = {getInput}
                        className = 'budget-input'>
                    </input>
                    <button className = 'set-button'>Calculate</button>
                    </form>
                </div>
                <div className = 'remaining' className = 'budget'>Remaining: 
                    <div style = {{color: remaining < 0 ? "#4A0404" : "lightgreen"}}>&#36;{remaining}</div>
                </div>
                <div className = 'budget'>Spent so far: 
                    <div style = {{color: spent < budget ? "lightgreen" : "#4A0404"}}>&#36;{spent}</div>
                </div>
            </div>
        </>
    );
};

export default Budget;