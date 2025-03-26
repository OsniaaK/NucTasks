import { DeleteList } from "./StyledButton";
import { useTaskHandlers } from "../../Default/DefaultFunction";

export const RemoveAll = ({onTasksCleared}) => {
  const { handleCleanTasks } = useTaskHandlers();
  return (
    <>
      <DeleteList type="button" id="deleteAllButton" onClick={() => {
        handleCleanTasks();
        localStorage.removeItem("tasks");
        if (onTasksCleared) {
          onTasksCleared();
        }
      }}>
        Borrar Todo
      </DeleteList>
    </>
  );
};

import PropTypes from "prop-types";
RemoveAll.propTypes = {
  onTasksCleared: PropTypes.func,
};