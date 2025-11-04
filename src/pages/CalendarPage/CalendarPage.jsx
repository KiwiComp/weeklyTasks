import { useSelector } from 'react-redux';
import './calendar-page.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';

function CalendarPage() {

    const previousWeeks = useSelector((state) => state.task.tasksPreviousWeeks)

    return(
        <section className="calendarPage">
            <h1 className='calendarPageTitle'>Tidigare veckor</h1>

            <section className='allPreviousWeeks'>
                {previousWeeks.map((week) => (
                    <Link to="/archive" state={{week}}>
                        <article className='archiveSingleWeek'>
                            <p>Vecka {week.weekNumber-1}, {week.year}</p>
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </article>
                    </Link>
                ))}
            </section>

            {previousWeeks.length === 0 &&
                <p className='pNoArchivedWeeks'>Du har inga arkiverade veckor.</p>
            }
            
        </section>
    )
}

export default CalendarPage;