import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Videos from './Components/Videos';
import Screenplays from './Components/Screenplays';
import Magazines from './Components/Magazines';
import Home from './Components/Home';
import User from './Components/User';
import jwt_decode from "jwt-decode";
import ManageVideos from './Components/ManageVideos';
import Manageplays from './Components/Manageplays';
import Videoedit from './Components/Videoedit';
import Playedit from './Playedit';
import Magedit from './Components/Magedit';
import Managemag from './Components/Managemag';
import Homeuser from './Components/Homeuser';
import Login from './Components/Login';
import Register from './Components/Register'
import Magz from './Components/videos/magazines';
import Vids from './Components/videos/videos';


function App() {
  
  const [user, setuser] = React.useState(null);

  React.useEffect(() => {
    try {
      const token = localStorage.getItem('token');
      var decoded = jwt_decode(token);
      setuser(decoded);
    } catch {}
  }, [])
  

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Homeuser/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/update_video/:id" element={<Videoedit/>}/>
          <Route path="/update_screenplay/:id" element={<Playedit/>}/>
          <Route path="/update_magazine/:id" element={<Magedit/>}/>
          <Route exact path="/add_videos" element={<Videos/>}/>
          <Route exact path="/manage_videos" element={<ManageVideos/>}/>
          <Route exact path="/manage_magazines" element={<Managemag/>}/>
          <Route exact path="/manage_screenplays" element={<Manageplays/>}/>
          <Route exact path="/add_screenplays" element={<Screenplays/>}/>
          <Route exact path="/add_magazines" element={<Magazines/>}/>
          <Route exact path="/admin" element={<Home/>}/>
          <Route exact path="/users" element={<User/>}/>
          <Route exact path="/Magazines" element={<Magz/>}/>
          <Route exact path="/Videos" element={<Vids/>}/>

        </Routes>
    </Router>
  )
}

export default App