import WeeklyTasksComponent from "./WeeklyTasksComponent";


function DisplayTasksStartPageComponent({doneTasks, notDoneTasks, onCheckToggle}) {

    const weekDayOrder = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];

    const sortDoneTasks = (a, b) => {
        
        const dayA = weekDayOrder.indexOf(a.day);
        const dayB = weekDayOrder.indexOf(b.day);

        if (dayA !== -1 && dayB !== -1 && dayA !== dayB) {
            return dayA - dayB;
        }

        return a.name.localeCompare(b.name, 'sv');
    };
    
    return(
        <section className='startPageExistingTasks'>
            {[...notDoneTasks]
                .sort((a, b) => a.name.localeCompare(b.name, 'sv')) 
                .map((task) => (
                    <WeeklyTasksComponent key={task.id} task={task} onCheckToggle={() => onCheckToggle(task)}/>
                ))
            }

            {doneTasks.length > 0 && notDoneTasks.length > 0 && (
                <hr className="taskDivider" />
            )}

            {[...doneTasks]
                .sort(sortDoneTasks)
                .map((task) => (
                    <WeeklyTasksComponent key={task.id} task={task} onCheckToggle={() => onCheckToggle(task)}/>
                ))
            }
        </section>
    )
}

export default DisplayTasksStartPageComponent;