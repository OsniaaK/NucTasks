import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { InputTask } from "./components/InputForm/InputTask";
import { AddedTask } from "./components/Tasks/AddedTask";
import { RemoveAll } from "./components/ClearButton/RemoveAll";
import { cleanTask } from "./ReduxStore/SliceForTasks";
import { 
  MainStyled,
  TitleTasks,
  FormStyled,
  ContainerList,
  NullTasks,
} from "./Default/DefaultStyles";

function App() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleTasksCleared = () => {
    dispatch(cleanTask());
  };

  return (
    <>
      <MainStyled>
        <TitleTasks>NUCTASKS</TitleTasks>
        <FormStyled>
          <InputTask
            IDinput="writtenTask"
            IDbutton="sendTask"
          />
        </FormStyled>
        <ContainerList className="container-list">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <AddedTask
                key={task.id}
                taskId={task.id}
                taskName={task.name}
              />
            ))
          ) : (
            <NullTasks>No hay tareas</NullTasks>
          )}
        </ContainerList>
        <RemoveAll onTasksCleared={handleTasksCleared} />
      </MainStyled>
    </>
  );
}

export default App;
