import { Link } from 'react-router';
import './css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

function Footer() {

    return(
        <footer>
            <Link to="/addTask">
                <FontAwesomeIcon icon={faSquarePlus}/>
            </Link>
        </footer>
    )
}

export default Footer;