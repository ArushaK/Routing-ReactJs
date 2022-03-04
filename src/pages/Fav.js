import {useContext} from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavContext from '../store/fav-context';

function Fav(){
    const favCtx=useContext(FavContext);
    let content;

    if(favCtx.totalFav === 0){
        content=<p>You got no favorites yet. Start adding some?</p>
    }else{
        content=<MeetupList meetups={favCtx.fav}></MeetupList>
    }

    return <section>
        <h1>My Favorites</h1>
        {content}
    </section>
}

export default Fav;