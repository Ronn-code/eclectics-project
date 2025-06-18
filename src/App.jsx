import Home from "./Home"
import Cancel from "./Cancel";
import Login from "./Login";
import Alogin from "./Alogin";
import Setting from "./Setting";
import Form from "./Form";
import Admin from "./Admin";
import Resource1 from "./Resource1";
import User from "./User";
import Resources from "./Resources";
import Rooms from "./Rooms";
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path="/cancel" element={<Cancel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/alogin" element={<Alogin/>}/>
        <Route path="/setting" element={<Setting/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path="/admin"element={<Admin/>}/>
        <Route path="/resource1"element={<Resource1/>}/>
        <Route path="/user"element={<User/>}/>
        <Route path="/rooms"element={<Rooms/>}/>
        <Route path="/resources"element={<Resources/>}/>
      </Routes></BrowserRouter>
  );
}

export default App