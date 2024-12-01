import "./App.css";
import CalcInput from "./components/CalcInput";
import CalcButtons from "./components/CalcButtons";

const buttons = ["AC", "+/-", "%", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];

const App = () => {
  return (
    <>
      <CalcInput input_value="0"/>
      <div className="button_wrap">
        {buttons.map(btnName => {
          return <CalcButtons key={btnName} buttonName={btnName}/>
        })}
      </div>
    </>
    

  );
};

export default App;