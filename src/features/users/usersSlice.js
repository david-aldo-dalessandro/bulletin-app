/* usersSlice.js
 * David D'Alessandro
 * March 22, 2024
 * A collection of reducer logic and actions for the users feature of the app
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "David" },
  { id: "1", name: "Joe Momma" },
  { id: "2", name: "Chris Sandles" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
