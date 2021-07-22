import React from 'react';
import './Task.css'

const Task = ({task, handleTaskClick, handleTaskClickDelete}) => {

    return (
        <div className = 'task-container' 
        style= {task.completed ? {borderLeft: '6px solid chartreuse'} : {}}
        >
            <div className='task-title' onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className = 'buttons-container' onClick = {() => handleTaskClickDelete(task.id)}>
                <button className = 'remove-task'>X</button>
            </div>
            
       </div>
    )
    // return ( 
    //     <div className = 'task-container'>
    //         {task.title}
    //     </div>
    // );
}
 
export default Task;