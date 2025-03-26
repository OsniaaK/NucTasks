import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "./SliceForTasks";

export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});