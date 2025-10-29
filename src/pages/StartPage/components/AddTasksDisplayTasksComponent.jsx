import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { deleteTask } from '../../../features/tasksSlice';
import './css/weekly-tasks-component.css'

function AddTasksDisplayTasksComponent({task}) {
    const dispatch = useDispatch();

    return(
        <section className="displayWeeklyTasks">

            <article className='singleTask'>

                <article className='singleTaskLeft'>
                    <p>{task.name}</p>
                </article>

                <article className='singleTaskRight'>
                    <FontAwesomeIcon onClick={() => dispatch(deleteTask(task))} icon={faTrashCan} className='iconTrashCan'/>
                </article>

            </article>

        </section>
    )
} 

export default AddTasksDisplayTasksComponent;