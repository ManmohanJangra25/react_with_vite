import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);

  return (
    <p className="lead mb-4">
      Counter Current Value: <b>{counterVal}</b>
    </p>
  );
};

export default DisplayCounter;
