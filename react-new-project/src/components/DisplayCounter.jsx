import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);

  return (
    <p className="lead mb-4">
      Counter Current Value: <b>{counter}</b>
    </p>
  );
};

export default DisplayCounter;
