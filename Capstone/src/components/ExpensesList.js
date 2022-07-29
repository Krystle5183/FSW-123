import Expense from "./Expense";

function ExpensesList({ expenses, del }) {

    return (
        <>
            {expenses.map((exp) => {
                return ( <Expense 
                    key = {exp.id} 
                    expense = {exp} 
                    del = {del} />)
            })}
        </>
    );
};

export default ExpensesList;