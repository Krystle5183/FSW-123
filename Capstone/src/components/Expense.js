import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Expense({ expense, del }){

    return (
        <>
            <div className='wrapper'>
                <div className = 'expense-name'>{expense.name}</div>  
                <div className = 'expense-frequency'>{expense.frequency}</div> 
                <div className = 'expense-cost'>-&#36;{expense.cost}</div>
                <button 
                className = 'delete-button'
                onClick = {() => del(expense.id)}>Remove</button> 
            </div>
        </>
    );
};

export default Expense;