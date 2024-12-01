import { useState } from 'react';
import PropTypes from "prop-types";
import { TasksContext } from './contextTask';


export const TasksProvider = ({ children }) => {
    const [taskCount, setTaskCount] = useState(0);

    return (
        <TasksContext.Provider value={{ taskCount, setTaskCount }}>
            {children}
        </TasksContext.Provider>
    );
};

TasksProvider.propTypes = {
  children: PropTypes.node.isRequired
};
