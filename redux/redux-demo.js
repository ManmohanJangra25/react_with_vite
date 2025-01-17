const redux = require("redux");

const INITIAL_VALUE = {
  counter: 0,
};

const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;

  if (action.type === "INCREAMENT") {
    newStore = { counter: store.counter + 1 };
  }
  if (action.type === "DECREAMENT") {
    newStore = { counter: store.counter - 1 };
  }

  if (action.type === "ADDITION") {
    newStore = { counter: store.counter + action.payload.number };
  }
  if (action.type === "SUBTRACTION") {
    newStore = { counter: store.counter - action.payload.number };
  }

  return newStore;
};
const store = redux.createStore(reducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subscriber);

store.dispatch({ type: "INCREAMENT" });
store.dispatch({ type: "INCREAMENT" });
store.dispatch({ type: "INCREAMENT" });
store.dispatch({ type: "DECREAMENT" });
store.dispatch({ type: "DECREAMENT" });
store.dispatch({
  type: "ADDITION",
  payload: {
    number: 7,
  },
});
store.dispatch({
  type: "SUBTRACTION",
  payload: {
    number: 5,
  },
});
