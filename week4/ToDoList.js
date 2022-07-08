import Todo from './Todo';


function ToDoList({ toDoList, comp, del }) {

    return (  
        <>
            {toDoList.map((todo) => {
                return( <Todo key = {todo.id} todo = {todo} comp = {comp} del = {del}/>)
            })}
        </>
    );
};

export default ToDoList;