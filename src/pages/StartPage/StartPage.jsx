import { useDispatch, useSelector } from 'react-redux';
import './start-page.css'
import { useState } from 'react';
import DisplayTasksStartPageComponent from './components/DisplayTasksStartPageComponent';
import StartPageBtnsComponent from './components/StartPageBtnsComponent';
import AddDayToast from '../../components/AddDayToast';
import { addDayToTask, removeDayFromTask, toggleDone } from '../../features/tasksSlice';

function StartPage() {

    const dispatch = useDispatch();
    const userTasks = useSelector((state) => state.task.tasks);
    const doneTasks = userTasks.filter(task => task.isDone);
    const notDoneTasks = userTasks.filter(task => !task.isDone);
    const [showSetDayToast, setShowSetDayToast] = useState(false);
    const [taskToAddDay, setTaskToAddDay] = useState(null);



    const handleCheckToggle = (task) => {
        if(!task.isDone) {
            setTaskToAddDay(task);
            setShowSetDayToast(true);
        } else {
            dispatch(toggleDone(task));
            removeDayToCheckedTask(task);
        }
    }

    const addDayToCheckedTask = (task, day) => {
        const taskAddDay = {id: task.id, name: task.name, isDone: task.isDone, day: day};
        dispatch(addDayToTask(taskAddDay));
        dispatch(toggleDone(taskAddDay));
        setShowSetDayToast(false);
    }

    const removeDayToCheckedTask = (task) => {
        const removeDayTask = {id: task.id, name: task.name, isDone: task.isDone, day: null};
        dispatch(removeDayFromTask(removeDayTask));
    }

    const cancelCheck = () => {
        setShowSetDayToast(false);
    }


    return(
        <section className='startPage'>
            <h1>Denna veckas todos</h1>

            {userTasks.length > 0 
                ? 
                <p>Avklarat: {doneTasks.length}/{userTasks.length}.</p>
                :
                <p>Du har inga todos.</p>
            }

            <DisplayTasksStartPageComponent 
                doneTasks={doneTasks} 
                notDoneTasks={notDoneTasks} 
                onCheckToggle={handleCheckToggle}
            />

            {userTasks.length > 0 &&
                <StartPageBtnsComponent />
            }

            {showSetDayToast &&
                <AddDayToast 
                    task={taskToAddDay} 
                    onDone={addDayToCheckedTask} 
                    onCancel={cancelCheck}
                />
            }
            
        </section>
    )
}

export default StartPage;