/* usersSlice.js
 * David D'Alessandro
 * March 22, 2024
 * A collection of reducer logic and actions for the users feature of the app
 */

import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const userAdapter = createEntityAdapter();

const initialState = userAdapter.getInitialState();

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(USERS_URL);
  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      /* return action.payload; */
      userAdapter.upsertMany(state, action.payload);
    });
  },
});

/* export const selectAllUsers = (state) => state.users;
export const selectUserById = (state, userId) => {
  return state.users.find((user) => user.id === userId);
}; */

export const { selectAll: selectAllUsers, selectById: selectUserById } =
  userAdapter.getSelectors((state) => state.users);

export default usersSlice.reducer;
