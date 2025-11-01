import { useDispatch, useSelector } from 'react-redux';
import './add-tasks-page.css'
import { useState } from 'react';
import {addTask, deleteAllTasks} from "../../features/tasksSlice.js"
import AddTasksDisplayTasksComponent from '../StartPage/components/AddTasksDisplayTasksComponent.jsx';
import Toast from '../../components/Toast.jsx';

function AddTasksPage() {

    const dispatch = useDispatch();
    const userTasks = useSelector((state) => state.task.tasks)
    const [inputTaskName, setInputTaskName] = useState("");
    const [showToast, setShowToast] = useState(false);

    const addNewTask = (taskName) => {
        const newTask = {id: crypto.randomUUID(), name: taskName, isDone: false};
        dispatch(addTask(newTask));
        reset();
    }

    const reset = () => {
        setInputTaskName("");
    }

    const yesCloseToast = () => {
        dispatch(deleteAllTasks())
        setShowToast(false);
    }

    const noCloseToast = () => {
        setShowToast(false);
    }


    return(
        <section className='addTasksPage'>
            <h1>Redigera todos</h1>

            <article className='addTaskCreateContainer'>
                <input 
                type="text" 
                placeholder='Todo'
                value={inputTaskName}
                onChange={(event) => {
                    const value = event.target.value;
                    const capitalised = value.charAt(0).toUpperCase() + value.slice(1);
                    setInputTaskName(capitalised)
                }}
                />

                <button onClick={() => addNewTask(inputTaskName)} className="addTaskAddBtn">
                    +
                </button>
            </article>
            
            <p className='addTaskPExistingTasks'>Existerande todos</p>

            <section className='addTaskExistingTasks'>
                {[...userTasks]
                    .sort((a, b) => a.name.localeCompare(b.name, 'sv'))
                    .map((task) => (
                        <AddTasksDisplayTasksComponent key={task.id} task={task} />
                ))}
            </section>
            
            {userTasks.length > 0 &&
                 <button className="addTasksDeleteAllTasksBtn" onClick={() => setShowToast(true)}>
                    Radera alla todos
                </button>
            }

            {showToast &&
                <Toast 
                    message="Vill du verkligen radera alla todos?"
                    onYesClose={yesCloseToast} 
                    onNoClose={noCloseToast}
                />
            }
            
        </section>
    )
}

export default AddTasksPage;