import { faSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function ArchivedTasksComponent({task}) {

    return(
        <section className={`displayWeeklyTasks ${task.isDone ? 'displayDoneWeeklyTasks' : 'displayNotDoneWeeklyTasks'}`}>

            <article className={!task.isDone ? 'singleTask' : 'singleTaskDone'}>

                <article className='singleTaskLeft'>
                    <FontAwesomeIcon
                        icon={task.isDone ? faSquareCheck : faSquare}
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

export default ArchivedTasksComponent;