import './css/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

function Header() {


    return(
        <header>
            <NavLink to="/calendar" className={({isActive}) => isActive ? "activeHeaderIconLink" : ""}>
                <FontAwesomeIcon icon={faCalendarWeek}></FontAwesomeIcon>
            </NavLink>

            <NavLink to="/" end className={({isActive}) => isActive ? "activeHeaderIconLink" : ""}>
                <FontAwesomeIcon icon={faHome} className='iconHome'></FontAwesomeIcon>
            </NavLink>

            <NavLink to="/addTask" className={({isActive}) => isActive ? "activeHeaderIconLink" : ""}>
                <FontAwesomeIcon icon={faSquarePlus} />
            </NavLink>
        </header>
    )
}

export default Header;