const TodoList = (props) => {
    function handleDelete(e) {
        e.target.parentElement.remove()
        
    }
    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">{props.listText} <span className="p">{props.listDate}</span> <button type="button" onClick={handleDelete} className="btn btn-danger btn-sm">Delete</button></li>
    )
};

export default TodoList;