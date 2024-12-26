import { useReducer, useState } from "react";
import InputFIelds from "./TodoInputs";
import TodoList from "./TodoList";

const todoItemsReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  
  if(action.type === "NEW_ITEM"){
    newTodoItems = [
      ...currentTodoItems,
      action.payload
    ]
  } else {
    return [];
  }

  // console.log(newTodoItems);
  

  return newTodoItems;
}

const App = () => {
  // const [todoList, setTodoList] = useState([]);
  const [todoList, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  function addList(newList) {
    // setTodoList(prevList => {
    //   return [...prevList, newList];
    // });

    const newItemAction = {
      type: "NEW_ITEM",
      payload: newList
    }
    dispatchTodoItems(newItemAction);
  };

  return (
    <>
      <div className="h3 text-center">Todo List</div>
      <div className="container p-5">
        <div className="col-lg-12 d-flex justify-content-center gap-2 mb-3">
          <InputFIelds lists={addList}/>
        </div>
        <ul className="list-group">
          {todoList.map((todoMap) => {
            return <TodoList key={Math.random()} listText={todoMap.todo_text} listDate={todoMap.todo_date}/>;
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
