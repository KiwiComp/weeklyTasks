import './css/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';

function Header() {


    return(
        <header>
            <Link to="/">
                <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
            </Link>

            <Link to="/calendar">
                <FontAwesomeIcon icon={faCalendarWeek}></FontAwesomeIcon>
            </Link>
        </header>
    )
}

export default Header;