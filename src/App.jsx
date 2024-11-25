import styled from "styled-components";
import { InputTask } from "./components/InputTask";
import { AddedTask } from "./components/AddedTask";
import { RemoveAll } from "./components/RemoveAll";
import { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  min-heigth: 400px;
  padding: 1.5rem 0;
  background-color: var(--containerBGC);
  gap: 1.25rem;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.304) 0px 0px 7px 1px;
  @media (max-width: 620px) {
    width: 95%;
  }
`;

const TitleTasks = styled.h1`
  font-family: var(--fontNormal);
  color: var(--colorFontLight);
  padding-top: 0.25rem;
  cursor: default;
`;

const FormStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  gap: 0.75rem;
  @media (max-width: 620px) {
    flex-direction: column;
  }
`;
const ContainerList = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  transition: 150ms ease-in-out all;
  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 1.2rem;
    transition: 150ms ease-in-out all;
  }
`;

const NullTasks = styled.p`
  color: #f84e50;
  cursor: default;
  text-shadow: black 1px 1px;
  font-family: var(--fontNormal);
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: 1px;
  align-self: center;
  text-align:center;
  
`;

let savedTasks = localStorage.getItem("tasks");

function App() {
  const [tasks, setTasks] = useState(() => {
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  useEffect(() => {
    const sendTaskButton = document.querySelector("#sendTask");
    const agregarTarea = (e) => {
      e.preventDefault();
      const taskInput = document.querySelector("#writtenTask");
      const targeted = taskInput.value.trim();
      if (targeted) {
        const newTasks = [...tasks, targeted];
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
        taskInput.value = "";
      } else {
        alert("No podés agregar una tarea vacía.");
      }
    };

    sendTaskButton.addEventListener("click", agregarTarea);
    return () => {
      sendTaskButton.removeEventListener("click", agregarTarea);
    };
  }, [tasks]);
  useEffect(() => {
    const inputAdd = document.querySelector("#writtenTask");
    const agregarInput = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const tasked = e.target.value.trim();
        if (tasked) {
          const addedTask = [...tasks, tasked];
          setTasks(addedTask);
          localStorage.setItem("tasks", JSON.stringify(addedTask));
          document.querySelector("#writtenTask").value = "";
        } else {
          alert("No podés agregar una tarea vacía.");
        }
      }
    };
    inputAdd.addEventListener("keydown", agregarInput);
    return () => {
      inputAdd.removeEventListener("keydown", agregarInput);
    };
  });
  useEffect(() => {
    const delAll = document.querySelector("#deleteAllButton");
    const eliminarTodasTarea = (e) => {
      e.preventDefault();
      if (tasks.length == 0) {
        alert("No tenes tareas pibe")
        return;
      }
      delAll.classList.add("success")
      delAll.innerText="Listo"
      setTimeout(() => {
        localStorage.removeItem("tasks");
        setTasks([]);
        delAll.classList.remove("success")
        delAll.innerText="Borrar Todo"
      }, 600);
    };
    delAll.addEventListener("click", eliminarTodasTarea);
    return () => {
      delAll.removeEventListener("click", eliminarTodasTarea);
    };
  });

  useEffect(() => {
    const borrarUnaTarea = document.querySelectorAll(".button-for-delete");

    const eliminarUnaTarea = (e) => {
      e.preventDefault();
      const tareaIndex = Array.from(borrarUnaTarea).indexOf(e.target);
      const NewList = tasks.filter((_, index) => index !== tareaIndex);
      localStorage.setItem("tasks", JSON.stringify(NewList));
      setTasks(NewList);
    };

    borrarUnaTarea.forEach((tarea) =>
      tarea.addEventListener("click", eliminarUnaTarea)
    );
    return () => {
      borrarUnaTarea.forEach((tarea) =>
        tarea.removeEventListener("click", eliminarUnaTarea)
      );
    };
  }, [tasks]);

  return (
    <>
      <MainStyled>
        <TitleTasks>NUCTASKS</TitleTasks>
        <FormStyled>
          <InputTask
            IDinput="writtenTask"
            IDbutton="sendTask"
            placeholder="¿Qué tarea deseas agregar?"
            textButton="Agregar"
          />
        </FormStyled>
        <ContainerList className="container-list">
            {tasks.length === 0 && <NullTasks>No Hay Tareas</NullTasks>}
          <TransitionGroup>
            {tasks.map((task, index) => (
              <CSSTransition key={index} timeout={300} classNames="fade">
                <AddedTask taskName={task} clase="button-for-delete" />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ContainerList>
        <RemoveAll />
      </MainStyled>
    </>
  );
}

export default App;
