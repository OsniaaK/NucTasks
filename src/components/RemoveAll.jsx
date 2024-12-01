import styled from "styled-components";
import { useTasks } from "../context/contextTask";

const DeleteList = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  align-center: center;
  width: 90%;
  padding: 1rem 0;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: var(--fontNormal);
  background-color: #f84e50;
  text-shadow: black 1px 1px;
  color: var(--colorFontDark);
  border: none;
  border-radius: 7px;
  transition: all 100ms ease-in-out;
  margin-top: 1rem;
  cursor: pointer;
  position:relative;
  overflow:hidden;
  &:hover {
    transition: all 100ms ease-in-out;
    transform: scale(1.02) translateY(-5px);
    box-shadow: black 0px 5px 5px ;
  }
  &:active {
    transition: all 100ms ease-in-out;
    transform: scale(0.95);
  }
`;

export const RemoveAll = () => {
  const { tasks, setTasks } = useTasks();

  const handleRemoveAll = () => {
    if (tasks.length === 0) {
      alert("No tenes tareas pibe");
      return;
    }
    setTasks([]);
    localStorage.removeItem("tasks");
  };

  return (
    <>
      <DeleteList type="button" id="deleteAllButton" onClick={handleRemoveAll}>
        Borrar Todo
      </DeleteList>
    </>
  );
};
