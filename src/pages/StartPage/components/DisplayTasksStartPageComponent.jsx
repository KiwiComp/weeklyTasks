import WeeklyTasksComponent from "./WeeklyTasksComponent";


function DisplayTasksStartPageComponent({doneTasks, notDoneTasks, onCheckToggle}) {
    
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
                .sort((a, b) => a.name.localeCompare(b.name, 'sv')) 
                .map((task) => (
                    <WeeklyTasksComponent key={task.id} task={task} onCheckToggle={() => onCheckToggle(task)}/>
                ))
            }
        </section>
    )
}

export default DisplayTasksStartPageComponent;