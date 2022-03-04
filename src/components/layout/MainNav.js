import {Link} from 'react-router-dom';
import classes from './MainNav.module.css'
import {useContext} from 'react';
import FavContext from '../../store/fav-context';

function MainNav(){
    const favCtx=useContext(FavContext);

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
                    <Link to='/fav'>Favorites
                    <span className={classes.badge}>{favCtx.totalFav}</span></Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNav;