
import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

const TaskState = props => {
    
    const initialState = {
        tasks: []
    }

    // Crear el dispatch y state
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    return (
        <TaskContext.Provider>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;