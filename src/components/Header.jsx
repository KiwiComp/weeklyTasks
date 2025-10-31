import './css/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

function Header() {


    return(
        <header>
            <Link to="/calendar">
                <FontAwesomeIcon icon={faCalendarWeek}></FontAwesomeIcon>
            </Link>

            <Link to="/">
                <FontAwesomeIcon icon={faHome} className='iconHome'></FontAwesomeIcon>
            </Link>

            <Link to="/addTask">
                <FontAwesomeIcon icon={faSquarePlus} />
            </Link>
        </header>
    )
}

export default Header;