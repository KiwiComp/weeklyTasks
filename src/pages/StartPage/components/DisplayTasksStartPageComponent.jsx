import WeeklyTasksComponent from "./WeeklyTasksComponent";


function DisplayTasksStartPageComponent({doneTasks, notDoneTasks}) {
    
    return(
        <section className='startPageExistingTasks'>
            {[...notDoneTasks]
                .sort((a, b) => a.name.localeCompare(b.name, 'sv')) // sortera enligt svensk alfabetisk ordning
                .map((task) => (
                    <WeeklyTasksComponent key={task.id} task={task} />
                ))
            }

            {doneTasks.length > 0 && notDoneTasks.length > 0 && (
                <hr className="taskDivider" />
            )}

            {[...doneTasks]
                .sort((a, b) => a.name.localeCompare(b.name, 'sv')) // sortera enligt svensk alfabetisk ordning
                .map((task) => (
                    <WeeklyTasksComponent key={task.id} task={task} />
                ))
            }
        </section>
    )
}

export default DisplayTasksStartPageComponent;