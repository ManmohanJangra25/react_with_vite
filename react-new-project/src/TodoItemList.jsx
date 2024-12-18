import { useContext } from "react";
import TodoList from "./TodoList";
import { TodoItemsContext } from "./store/todo-items-store";

const TodoItemList = (props) => {
    const todoItemsContextList = useContext(TodoItemsContext);

    function deleteListHandle(data) {
        props.deleteItem(data);
    };
    
    return (
        <>
            {todoItemsContextList.map(todoMap => {
                return <TodoList deletedItem={deleteListHandle} key={todoMap.todo_date} listText={todoMap.todo_text} listDate={todoMap.todo_date}/>
            })}
        </>
    );
};

export default TodoItemList;