const DateComp = () => {

    let date = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    

    return(
        <div>
            <h3>{date} / {month} / {year}</h3>
        </div>
    );
};

export default DateComp;