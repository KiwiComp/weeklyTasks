import { useDispatch, useSelector } from 'react-redux';
import './add-tasks-page.css'
import { useState } from 'react';
import WeeklyTasksComponent from '../StartPage/components/WeeklyTasksComponent';
import {addTask, deleteAllTasks} from "../../features/tasksSlice.js"

function AddTasksPage() {

    const dispatch = useDispatch();
    const userTasks = useSelector((state) => state.task.tasks)
    const [inputTaskName, setInputTaskName] = useState("");

    const addNewTask = (taskName) => {
        const newTask = {id: crypto.randomUUID(), name: taskName, isDone: false};
        dispatch(addTask(newTask));
        reset();
    }

    const reset = () => {
        setInputTaskName("");
    }


    return(
        <section className='addTasksPage'>
            {/* <h1>Add new tasks</h1> */}
            <h1>Lägg till nya todos</h1>

            <input 
                type="text" 
                // placeholder='Task name'
                placeholder='Todo'
                value={inputTaskName}
                onChange={(event) => {
                    const value = event.target.value;
                    const capitalised = value.charAt(0).toUpperCase() + value.slice(1);
                    setInputTaskName(capitalised)
                }}
            />

            <button onClick={() => addNewTask(inputTaskName)} className="addTaskAddBtn">
                {/* Add */}
                Lägg till
            </button>

            {/* <p className='addTaskPExistingTasks'>Existing tasks</p> */}
            <p className='addTaskPExistingTasks'>Existerande todos</p>

            <section className='addTaskExistingTasks'>
                {userTasks.map((task) => (
                    <WeeklyTasksComponent key={task.id} task={task} />
                ))}
            </section>
            
            {userTasks.length > 0 &&
                <button className="addTasksDeleteAllTasksBtn" onClick={() => dispatch(deleteAllTasks())}>
                    {/* Delete all tasks */}
                    Radera alla todos
                </button>
            }
            
        </section>
    )
}

export default AddTasksPage;