import { useSelector } from 'react-redux';
import './calendar-page.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';

function CalendarPage() {

    const previousWeeks = useSelector((state) => state.task.tasksPreviousWeeks)

    return(
        <section className="calendarPage">
            <h1>Calendar page</h1>

            <section className='allPreviousWeeks'>
                {previousWeeks.map((week) => (
                    <Link to="/archive" state={{week}}>
                        <article className='archiveSingleWeek'>
                            <p>Vecka {week.weekNumber}, {week.year}</p>
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </article>
                    </Link>
                ))}
            </section>
            
        </section>
    )
}

export default CalendarPage;