import { useRef } from "react";

const InputFIelds = (props) => {
  const todoElem = useRef({
    todo_text: "",
    todo_date: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const todoElements = {
        todo_text: todoElem.current.todo_text.value,
        todo_date: todoElem.current.todo_date.value,
    }
    if(todoElements.todo_text.length > 0 && todoElements.todo_date.length > 0){
        props.lists(todoElements);
        todoElem.current.todo_text.value = "";
        todoElem.current.todo_date.value ="";
    } else {
        if(todoElements.todo_text.length === 0){
            todoElem.current.todo_text.setCustomValidity("Please Enter Todo Item Name");
            todoElem.current.todo_text.reportValidity();
        } else if(todoElements.todo_date.length === 0){
            todoElem.current.todo_date.setCustomValidity("Please Enter The Date");
            todoElem.current.todo_date.reportValidity();
        }
    }
  }

  return (
    <form style={{display: 'flex', gap: '10px'}}>
      <input
        // onChange={handleChange}
        ref={ref => todoElem.current.todo_text = ref}
        // value={val.todo_text}
        name="todo_text"
        className="form-control"
        type="text"
        placeholder="todo text"
      />
      <input
        // onChange={handleChange}
        // value={val.todo_date}
        ref={ref => todoElem.current.todo_date = ref}
        name="todo_date"
        className="form-control"
        type="date"
      />
      <button onClick={handleSubmit} className="btn btn-primary btn-sm">
        Submit
      </button>
    </form>
  );
};

export default InputFIelds;
