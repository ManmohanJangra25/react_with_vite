import "./CalcButtons.css";

const CalcButtons = (props) => {

    function handleClick(e) {
        console.log(e.target.dataset.btnval);
    }

    return(
        <div className="calc-button">
            <button onClick={handleClick} data-btnval={props.buttonName}>{props.buttonName}</button>
        </div>
    );
}

export default CalcButtons;