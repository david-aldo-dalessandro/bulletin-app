/* store.js
 * David D'Alessandro
 * March 22, 2024 - 10:35 AM (Central Time)
 * A container for the app state as an immutable object tree
 */

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
