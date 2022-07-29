import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddExpenseForm({ add }) {

    const initialInputs = {
        name: '',
        frequency: '',
        cost: ''
    };

    const [input, setInput] = useState(initialInputs);

    const onChange = (e) => {
        const { name, value } = e.target;
        setInput((prevInputs) => ({ ...prevInputs, [name]: e.target.valueAsNumber || value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        add(input);
        setInput(initialInputs);
    };

    return (
        <>
            <form className = 'form-wrapper' onSubmit = {onSubmit}>
                <h3 className='form-header'>Add a new expense here!</h3> <br></br>
                <input 
                    className='input-add'
                    type='text'
                    placeholder='Name of expense?'
                    onChange = {onChange}
                    name = 'name'
                    value = {input.name}></input>
                <input
                    className='input-add'
                    type='text'
                    placeholder='How frequently?'
                    onChange = {onChange}
                    name = 'frequency'
                    value = {input.frequency}></input>
                <input
                    className='input-add'
                    type='number'
                    placeholder='Cost?'
                    onChange = {onChange}
                    name = 'cost'
                    value = {input.cost}></input>
                <button className = 'add-button'>Add New Expense</button>
            </form>
        </>
    );
};

export default AddExpenseForm;