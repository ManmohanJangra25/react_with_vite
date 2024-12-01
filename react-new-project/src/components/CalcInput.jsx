const CalcInput = (props) => {
    return(
        <div className="calc-input">
            <input className="form-control" type="number" readOnly value={props.input_value}/>
        </div>
    );
}

export default CalcInput;