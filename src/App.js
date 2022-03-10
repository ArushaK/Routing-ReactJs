import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetup from "./pages/AllMeetup";
import Fav from "./pages/Fav";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetup />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="/fav" element={<Fav />} />
      </Routes>
    </Layout>
  );
}

export default App;
