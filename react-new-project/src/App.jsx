import { useState } from "react";
import InputFIelds from "./TodoInputs";
import TodoList from "./TodoList";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  function addList(newList) {
    setTodoList(prevList => {
      return [...prevList, newList];
    });
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
            return <TodoList key={todoMap.todo_date} listText={todoMap.todo_text} listDate={todoMap.todo_date}/>;
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
