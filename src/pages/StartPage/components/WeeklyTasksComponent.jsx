import './css/weekly-tasks-component.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleDone } from '../../../features/tasksSlice';


function WeeklyTasksComponent({task}) {
    const dispatch = useDispatch()

    return(
        <section className="displayWeeklyTasks">

            <article className='singleTask'>

                <article className='singleTaskLeft'>
                    <FontAwesomeIcon
                        icon={task.isDone ? faSquareCheck : faSquare}
                        onClick={() => dispatch(toggleDone(task))}
                        className='checkIcons'
                    />
                    <p>{task.name}</p>
                </article>

                <article className='singleTaskRight'>
                    <FontAwesomeIcon onClick={() => dispatch(deleteTask(task))} icon={faTrashCan} className='iconTrashCan'/>
                </article>

            </article>

        </section>
    )
}

export default WeeklyTasksComponent;