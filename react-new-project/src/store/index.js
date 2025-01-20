import { configureStore, createSlice } from "@reduxjs/toolkit";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: INITIAL_VALUE.counter },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    addition: (state, action) => {
      state.counterVal += action.payload.number;
    },
    subtraction: (state, action) => {
      state.counterVal -= action.payload.number;
    },
  },
});

const privacySlice = createSlice({
  name: "PRIVACY_TOGGLE",
  initialState: { privacyVal: INITIAL_VALUE.privacy },
  reducers: {
    privacyToggle: (state) => {
      state.privacyVal = !state.privacyVal;
    },
  },
});

// const counterReducer = (store = INITIAL_VALUE, action) => {
//   if (action.type === "INCREMENT") {
//     return { ...store, counter: store.counter + 1 };
//   } else if (action.type === "DECREMENT") {
//     return { ...store, counter: store.counter - 1 };
//   } else if (action.type === "ADDITION") {
//     return { ...store, counter: store.counter + Number(action.payload.number) };
//   } else if (action.type === "SUBTRACTION") {
//     return { ...store, counter: store.counter - Number(action.payload.number) };
//   } else if (action.type === "PRIVACY_TOGGLE") {
//     return { ...store, privacy: !store.privacy };
//   }
//   return store;
// };

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

export const counterAction = counterSlice.actions;
export const privacyAction = privacySlice.actions;
export default counterStore;
