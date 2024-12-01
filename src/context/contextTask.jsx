import { createContext, useContext } from "react";

export const TasksContext = createContext();

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
      throw new Error("useTasks debe ser usado dentro de un TasksProvider");
  }
  return context;
};