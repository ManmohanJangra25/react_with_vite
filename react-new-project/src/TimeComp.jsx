const TimeComp = () => {

    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    

    return(
        <div>
            <h3>{hours} : {minutes} : {seconds}</h3>
        </div>
    );
};

export default TimeComp;