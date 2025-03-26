import React, { useState } from "react";
import { InputTaskButton, InputTaskInput } from "./StyledInput";
import { useTaskHandlers } from "../../Default/DefaultFunction";

export const InputTask = ({ IDinput, IDbutton, onTaskAdded }) => {
  const { handleAddTask } = useTaskHandlers();
  const [taskName, setTaskName] = useState("");

  const handleClick = () => {
    if (taskName.trim()) {
      handleAddTask(taskName);
      const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const newTask = { id: Date.now(), name: taskName };
        localStorage.setItem("tasks", JSON.stringify([...existingTasks, newTask]));
      if (onTaskAdded) {
        onTaskAdded();
      }
      setTaskName("");
    }
  };

  return (
    <>
      <InputTaskInput
        type="text"
        id={IDinput}
        placeholder="¿Qué tarea deseas agregar?"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <InputTaskButton type="button" id={IDbutton} onClick={handleClick}>
        Agregar
      </InputTaskButton>
    </>
  );
};

import PropTypes from "prop-types";
InputTask.propTypes = {
  IDinput: PropTypes.string.isRequired,
  IDbutton: PropTypes.string.isRequired,
  onTaskAdded: PropTypes.func,
};

