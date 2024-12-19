import { useContext } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

const TodoList = (props) => {
  const todoItemsContextList = useContext(TodoItemsContext);

  const handleDelete = (e) => {
    const deleteData = todoItemsContextList.filter(data => data.todo_text !== e.target.value);
    props.deletedItem(deleteData);
  }
   
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.listText} <span className="p">{props.listDate}</span>{" "}
      <button
        value={props.listText}
        type="button"
        onClick={handleDelete}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoList;
