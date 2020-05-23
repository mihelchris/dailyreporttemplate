import React, { useState } from 'react';
import CreateTask from './CreateTask'
import TextField from '../editable/TextField'

function ManageTasks(props) {
    const id = props.id;

    const [tasks, setTasks] = useState(
        props.savedTasks || []
    );

    const updateTask = (val, task, index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1, { 'title': val, completed: task.completed });
        localStorage.setItem(id + ' tasks', JSON.stringify(newTasks))
        setTasks(newTasks);
    }

    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }];
        localStorage.setItem(id + ' tasks', JSON.stringify(newTasks))
        setTasks(newTasks);
    };

    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        localStorage.setItem(id + ' tasks', JSON.stringify(newTasks))
        setTasks(newTasks);
    };

    const removeTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        localStorage.setItem(id + ' tasks', JSON.stringify(newTasks))
        setTasks(newTasks);
    };

    return (
        <div className="tasks-wrapper">
            <div className="tasks">
                {tasks.map((task, index) => (
                    <div
                        className = {`task${task.completed ? " completed" : ""}`}
                    >
                        <TextField
                            value={task.title} 
                            onSave={(val) => updateTask(val, task, index)}
                        />
                        
                        <div className="task-buttons">
                            <button className="task-remove" onClick={() => removeTask(index)}>Remove</button>
                            <button className="task-complete" onClick={() => completeTask(index)}>Complete</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="create-task" >
                <CreateTask addTask={addTask} />
            </div>
        </div>
    );
}

export default ManageTasks;