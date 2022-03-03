import {Link} from 'react-router-dom';
import classes from './MainNav.module.css'

function MainNav(){
    return <header className={classes.header}>
        <div className={classes.logo}>Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>Add New Meetups</Link>
                </li>
                <li>
                    <Link to='/fav'>Fav</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNav;