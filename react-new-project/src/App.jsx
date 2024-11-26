import DateComp from "./DateComp";
import TimeComp from "./TimeComp";
import "./App.css"

const App = () => {
  return (
    <>
      <h1>Bharat Clock</h1>
      <div className="currentDateAndTime">
        <DateComp/> - <TimeComp/>
      </div>
    </>
  );
};

export default App;