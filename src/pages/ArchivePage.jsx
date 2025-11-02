import { useLocation } from "react-router";
import DisplayArchivedTasks from "./CalendarPage/DisplayArchivedTasks";


function ArchivePage() {

    const location = useLocation();
    const { week } = location.state || {};
    const archivedNotDoneTasks = week.tasks.filter(task => !task.isDone);
    const archivedDoneTasks = week.tasks.filter(task => task.isDone);

    return(
        <section className="archivePage">
            <h1 className="weekTitle">Vecka {week.weekNumber}</h1>
            <p className="pNumberOfDoneTasksArchivePage">Avklarat: {archivedDoneTasks.length}/{week.tasks.length}.</p>
            <DisplayArchivedTasks 
                notDoneTasks={archivedNotDoneTasks} 
                doneTasks={archivedDoneTasks}
            />
        </section>
    )
}

export default ArchivePage;