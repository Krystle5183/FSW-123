import Todo from './Todo';

function ToDoList({ toDoList, comp, del, edit }) {

    return (  
        <>
        {toDoList.map((todo) => {
            return( <Todo key = {todo.id} todo = {todo} comp = {comp} del = {del} edit = {edit}/>)
        })}
    </>
);
};

export default ToDoList;
