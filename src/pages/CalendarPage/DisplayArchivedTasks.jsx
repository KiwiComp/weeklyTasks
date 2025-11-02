import ArchivedTasksComponent from "./ArchivedTasksComponent";



function DisplayArchivedTasks({notDoneTasks, doneTasks}) {

    return(
        <section className="displayArchivedTasks">

            {[...notDoneTasks]
                .sort((a, b) => a.name.localeCompare(b.name, 'sv')) 
                .map((task) => (
                    <ArchivedTasksComponent key={task.id} task={task}/>
                ))
            }

            {doneTasks.length > 0 && notDoneTasks.length > 0 && (
                <hr className="taskDivider" />
            )}

            {[...doneTasks]
                .sort((a, b) => a.name.localeCompare(b.name, 'sv')) 
                .map((task) => (
                    <ArchivedTasksComponent key={task.id} task={task}/>
                ))
            }

        </section>
    )

}

export default DisplayArchivedTasks;