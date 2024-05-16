import {createSlice} from "@reduxjs/toolkit";

const initialState = {count: 0, showCounter: true}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase(state, action) {
      state.count = state.count + action.payload;
    },
    decrease: (state, action) => {
      state.count = state.count - action.payload.amount
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter
    },
  }
})
export const counterActions = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
