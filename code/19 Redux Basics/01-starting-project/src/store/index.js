import {configureStore} from "@reduxjs/toolkit";
import {counterReducer} from "./counter";
import {authReducer} from "./auth";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  }
})

