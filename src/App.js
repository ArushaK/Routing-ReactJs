import { Route, Routes} from 'react-router-dom';
import MainNav from './components/layout/MainNav';
import AllMeetup from './pages/AllMeetup';
import Fav from './pages/Fav';
import NewMeetup from './pages/NewMeetup';

function App() {
  return (
    <div>
      <MainNav/>
      <Routes>
      <Route path="/" element={<AllMeetup/>} />
      
      <Route path='/new-meetup' element={<NewMeetup/>} />

      <Route path='/fav' element={<Fav/>} />
        </Routes>
    </div>
  );
}

export default App;
