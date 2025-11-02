import ArchivedTasksComponent from "./ArchivedTasksComponent";



function DisplayArchivedTasks({notDoneTasks, doneTasks}) {

    const weekDayOrder = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];

    const sortDoneTasks = (taskA, taskB) => {
        const dayA = weekDayOrder.indexOf(taskA.day);
        const dayB = weekDayOrder.indexOf(taskB.day);

        if (dayA !== dayB && dayA !== -1 && dayB !== -1) {
            return dayA - dayB;
        }

        return taskA.name.localeCompare(taskB.name, "sv");
    }

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
                .sort(sortDoneTasks)
                .map((task) => (
                    <ArchivedTasksComponent key={task.id} task={task}/>
                ))
            }

        </section>
    )

}

export default DisplayArchivedTasks;