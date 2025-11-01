import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { deleteTask } from '../../../features/tasksSlice';
import './css/weekly-tasks-component.css'

function AddTasksDisplayTasksComponent({task, onEdit, disableButtons}) {
    const dispatch = useDispatch();

    return(
        <section className="displayWeeklyTasks">

            <article className='singleTask'>

                <article className='singleTaskLeft'>
                    <p>{task.name}</p>
                </article>

                <article className='singleTaskRight'>
                    <FontAwesomeIcon 
                        onClick={() => !disableButtons && onEdit(task)} 
                        icon={faPenToSquare} 
                        className='iconEdit'
                    />
                    <FontAwesomeIcon 
                        onClick={() => !disableButtons && dispatch(deleteTask(task))} 
                        icon={faTrashCan} 
                        className='iconTrashCan'
                    />
                </article>

            </article>

        </section>
    )
} 

export default AddTasksDisplayTasksComponent;