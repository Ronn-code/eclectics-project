import Home from "./Home"
import Cancel from "./Cancel";
import Login from "./Login";
import Alogin from "./Alogin";
import Setting from "./Setting";
import Asetting from "./Asetting";
import Form from "./Form";
import Admin from "./Admin";
import Bookings from "./Bookings";
import Resource1 from "./Resource1";
import User from "./User";
import Resources from "./Resources";
import Rooms from "./Rooms";
import Addroom from "./Addroom";
import Addresource from "./Addresource";
import Adduser from "./Adduser";
import Mybookings from "./Mybookings";
import Viewuser from "./Viewuser";
import EditUser from "./EditUser";
import EditRoom from "./EditRoom";
import EditResource from "./EditResource";
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
        <Route path="/asetting" element={<Asetting/>}/>
        <Route path='/form/:roomid' element={<Form/>}/>
        <Route path="/admin"element={<Admin/>}/>
        <Route path="/mybookings"element={<Mybookings/>}/>
        <Route path="/bookings"element={<Bookings/>}/>
        <Route path="/resource1"element={<Resource1/>}/>
        <Route path="/user"element={<User/>}/>
        <Route path="/rooms"element={<Rooms/>}/>
        <Route path="/addroom" element={<Addroom/>}/>
        <Route path="/addresource" element={<Addresource/>}/>
        <Route path="/adduser" element={<Adduser/>}/>
        <Route path="/resources"element={<Resources/>}/>
        <Route path="/view/user/:userid" element={<Viewuser/>}/>
        <Route path="/edit/user/:userid" element={<EditUser/>}/>
        <Route path="/edit/room/:roomid" element={<EditRoom/>}/>
        <Route path="/edit/resource/:equipmentid" element={<EditResource/>}/>
        
      </Routes></BrowserRouter>
  );
}

export default App