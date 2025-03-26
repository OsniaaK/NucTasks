import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask, cleanTask } from "../ReduxStore/SliceForTasks";

export const useTaskHandlers = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (taskName) => {
    dispatch(addTask({ id: Date.now(), name: taskName }));
  };

  const handleRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  const handleCleanTasks = () => {
    dispatch(cleanTask());
  };

  return { tasks, handleAddTask, handleRemoveTask, handleCleanTasks };
};