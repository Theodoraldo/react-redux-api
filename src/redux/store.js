import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../redux/feature/usersSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
  }
});

export default store;