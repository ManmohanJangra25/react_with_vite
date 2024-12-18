import { useState } from "react";

const InputFIelds = (props) => {
    const [val, setVal] = useState({
        todo_text: '',
        todo_date: ''
    });
    function handleChange(e){
        const {name, value} = e.target;
        setVal((prevVal) => {
            return {
                ...prevVal,
                [name]: value
            }
        });
    }

    function handleSubmit() {
        props.lists(val);
        setVal({
            todo_text: '',
            todo_date: ''
        })
    }

    
    
    
    return(
        <>
            <input onChange={handleChange} value={val.todo_text} name="todo_text" className="form-control" type="text" placeholder="todo text"/>
            <input onChange={handleChange} value={val.todo_date} name="todo_date" className="form-control" type="date"/>
            <button onClick={handleSubmit} className="btn btn-primary btn-sm">Submit</button>
        </>
    )
};

export default InputFIelds;