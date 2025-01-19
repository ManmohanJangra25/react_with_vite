import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();
  const privacyStore = useSelector((store) => store.privacy);

  const handleIncreament = () => {
    if (!privacyStore) {
      dispatch({
        type: "INCREMENT",
      });
    }
  };
  const handleDecreament = () => {
    if (!privacyStore) {
      dispatch({
        type: "DECREMENT",
      });
    }
  };
  const handleAddition = () => {
    if (!privacyStore) {
      dispatch({
        type: "ADDITION",
        payload: {
          number: inputElement.current.value,
        },
      });
      inputElement.current.value = "";
    }
  };
  const handleSubtraction = () => {
    if (!privacyStore) {
      dispatch({
        type: "SUBTRACTION",
        payload: {
          number: inputElement.current.value,
        },
      });
      inputElement.current.value = "";
    }
  };

  const handleToggle = () => {
    dispatch({
      type: "PRIVACY_TOGGLE",
    });
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-dark btn-md px-4 gap-3"
          onClick={handleIncreament}
        >
          Increament (+1)
        </button>
        <button
          type="button"
          className="btn btn-success btn-md px-4"
          onClick={handleDecreament}
        >
          Decreament (-1)
        </button>
        <button
          type="button"
          className="btn btn-warning btn-md px-4"
          onClick={handleToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3">
        <div className="">
          <input
            type="number"
            className="form-control"
            id="forAddition"
            placeholder="Enter Number"
            ref={inputElement}
          />
        </div>
        <button
          type="button"
          className="btn btn-info btn-md px-4"
          onClick={handleAddition}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-info btn-md px-4"
          onClick={handleSubtraction}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
