/* store.js
 * David D'Alessandro
 * March 22, 2024 - 10:35 AM (Central Time)
 * A container for the app state as an immutable object tree
 */

import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
