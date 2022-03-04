import NewMeetupForm from '../components/meetups/NewMeetupForm'
import { useNavigate } from "react-router-dom";
function NewMeetup(){
    const navigate=useNavigate();
    function addMeetupHandler(meetupData){
        fetch('https://meetup-react-bb116-default-rtdb.firebaseio.com/meetups.json',
        {
            method:'POST',
            body: JSON.stringify(meetupData),
            headers:{
                'Content-type':'application/json'
            }
        }
        ).then(()=>{
            navigate('/');
        });
    }
    return <section>
        <h1>New Meetup</h1>
       <NewMeetupForm addOnMeetup={addMeetupHandler}/>
    </section>
}

export default NewMeetup;