import { useSelector } from 'react-redux';
import './start-page.css'
import { useEffect, useState } from 'react';
import DisplayTasksStartPageComponent from './components/DisplayTasksStartPageComponent';
import StartPageBtnsComponent from './components/StartPageBtnsComponent';

function StartPage() {

    const userTasks = useSelector((state) => state.task.tasks);
    const [numberOfTasks, setNumberOfTasks] = useState(0);
    const [completedTasks, setCompletedTasks] = useState(0);

    const doneTasks = userTasks.filter(task => task.isDone);
    const notDoneTasks = userTasks.filter(task => !task.isDone);

    useEffect(() => {
        setNumberOfTasks(userTasks.length);
        const completedTasks = userTasks.filter(task => task.isDone)
        setCompletedTasks(completedTasks.length)
    }, [userTasks])


    return(
        <section className='startPage'>
            <h1>Denna veckas todos</h1>

            {userTasks.length > 0 
                ? 
                <p>Avklarat: {completedTasks}/{numberOfTasks}.</p>
                :
                <p>Du har inga todos.</p>
            }

            <DisplayTasksStartPageComponent doneTasks={doneTasks} notDoneTasks={notDoneTasks}/>

            {userTasks.length > 0 &&
            <StartPageBtnsComponent />
            }
            
        </section>
    )
}

export default StartPage;