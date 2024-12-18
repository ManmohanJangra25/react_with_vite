import { useState } from "react";
import InputFIelds from "./TodoInputs";
import TodoItemList from "./TodoItemList";
import { TodoItemsContext } from "./store/todo-items-store";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  function addList(newList) {
    setTodoList(prevList => {
      return [...prevList, newList];
    });
  };

  function deleteList(newList) {
    setTodoList(newList);
  };
  
  return (
    <TodoItemsContext.Provider value={todoList}>
      <div className="h3 text-center">Todo List</div>
      <div className="container p-5">
        <div className="col-lg-12 d-flex justify-content-center gap-2 mb-3">
        <InputFIelds lists={addList}/>
        
        </div>
        <ul className="list-group">
        <TodoItemList deleteItem={deleteList} data={todoList}></TodoItemList>
        </ul>
      </div>
    </TodoItemsContext.Provider>
  );
};

export default App;
