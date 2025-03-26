import { createSlice } from "@reduxjs/toolkit";

const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialTasks,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    removeTask: (state, action) => {
      const updatedState = state.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(updatedState));
      return updatedState;
    },
    cleanTask: () => {
      localStorage.removeItem("tasks");
      return [];
    },
  },
});

export const { addTask, removeTask, cleanTask } = tasksSlice.actions;
export default tasksSlice.reducer;