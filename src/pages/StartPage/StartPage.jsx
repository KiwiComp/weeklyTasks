import { useDispatch, useSelector } from 'react-redux';
import WeeklyTasksComponent from './components/WeeklyTasksComponent';
import './start-page.css'
import { markAllTasks, unmarkAllTasks } from '../../features/tasksSlice';
import { useEffect, useState } from 'react';

function StartPage() {

    const userTasks = useSelector((state) => state.task.tasks);
    const dispatch = useDispatch();
    const [numberOfTasks, setNumberOfTasks] = useState(0);
    const [completedTasks, setCompletedTasks] = useState(0);

    useEffect(() => {
        setNumberOfTasks(userTasks.length);
        const completedTasks = userTasks.filter(task => task.isDone)
        setCompletedTasks(completedTasks.length)
    }, [userTasks])


    return(
        <section className='startPage'>
            {/* <h1>This week's tasks</h1> */}
            <h1>Denna veckas todos</h1>

            {userTasks.length > 0 
                ? 
                <p>Avklarat: {completedTasks}/{numberOfTasks}.</p>
                :
                <p>Du har inga todos.</p>
            }
            

            <section className='startPageExistingTasks'>
                {userTasks.map((task) => (
                    <WeeklyTasksComponent key={task.id} task={task} />
                ))}
            </section>

            {userTasks.length > 0 &&
                <section className='startPageButtons'>
                <button className="startPageBtnUnmarkAll" onClick={() => dispatch(unmarkAllTasks())}>
                    {/* Unmark all */}
                    Avmarkera alla
                </button>
                <button className="startPageBtnMarkAll" onClick={() => dispatch(markAllTasks())}>
                    {/* Mark all */}
                    Markera alla
                </button>
            </section>
            }
            
        </section>
    )
}

export default StartPage;