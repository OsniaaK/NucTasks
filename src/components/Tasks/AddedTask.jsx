import { ContainerTask, TitleTask, ButtonDelete } from "./StyledTask";
import { useTaskHandlers } from "../../Default/DefaultFunction";

export const AddedTask = ({ taskName, taskId }) => {
  const { handleRemoveTask } = useTaskHandlers();

  const handleClick = () => {
    handleRemoveTask(taskId);
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = existingTasks.filter((task) => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <ContainerTask id={taskId}>
      <TitleTask>{taskName}</TitleTask>
      <ButtonDelete type="button" onClick={handleClick}>
        Eliminar
      </ButtonDelete>
    </ContainerTask>
  );
};

import PropTypes from "prop-types";
AddedTask.propTypes = {
  taskName: PropTypes.string.isRequired,
  taskId: PropTypes.number.isRequired,
};
