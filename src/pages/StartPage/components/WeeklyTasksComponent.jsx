import './css/weekly-tasks-component.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { toggleDone } from '../../../features/tasksSlice.js';

function WeeklyTasksComponent({task, onCheckToggle}) {
    const dispatch = useDispatch()

    return(
        <section className={`displayWeeklyTasks ${task.isDone ? 'displayDoneWeeklyTasks' : 'displayNotDoneWeeklyTasks'}`}>

            {/* <article className='singleTask'> */}
            <article className={!task.isDone ? 'singleTask' : 'singleTaskDone'}>

                <article className='singleTaskLeft'>
                    <FontAwesomeIcon
                        icon={task.isDone ? faSquareCheck : faSquare}
                        // onClick={() => dispatch(toggleDone(task))}
                        onClick={onCheckToggle}
                        className='checkIcons'
                    />
                    <p className='taskName'>{task.name}</p>
                    
                </article>
                {task.isDone &&
                    <p className='dayOfExecution'>{task.day}</p>
                }

            </article>

        </section>
    )
}

export default WeeklyTasksComponent;