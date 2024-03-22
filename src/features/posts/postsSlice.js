/* postsSlice.js
 * David D'Alessandro
 * March 22, 2024 - 10:50 AM (Central Time)
 * A collection of reducer logic and actions for the posts feature of the app
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "First Post Title", content: "Content of the first post" },
  {
    id: "2",
    title: "Second Post Title",
    content: "Content of the second post",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
