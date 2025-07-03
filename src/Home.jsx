import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import profile from './images/profile3.jpg';
import room1 from './images/room1.jpg'
import room2 from './images/room2.jpg'
import room3 from './images/room3.jpg'
import room4 from './images/room4.jpg'
import { useNavigate } from 'react-router-dom';



function Home() {

const [rooms, setRooms] = useState([]);

const displayDetails = (id) =>{
    navigate(`/form/${id}`);
}

useEffect(() => {
    fetch('http://localhost:8001/rooms')
     .then(res => {
        if(!res.ok){
            throw new Error('Network not responding');
        }
        return res.json();
     })
     .then(data => setRooms(data))
     .catch(err => {
        console.error('Failed to fetch room data:', err);
     });
}, []);

const [searchTerm, setSearchTerm] = useState('');
const navigate = useNavigate();


  return (
    <div className="staff-dashboard">
        <aside className="left-side">
            <div className="profile">
                <img src={profile}></img>
                <div className="name-sec">
                    <h3>Justus Waweru</h3>
                   <sup> <span className='material-icons-sharp'>circle</span></sup>
                </div>
            </div>
            <div className="user-icons">
                <div className="profiles">
                    <Link to='/login'>
                    <span className='material-icons-sharp'>person</span></Link>
                    <h4>Profile</h4>
                </div>
                <div className="notification">
                    <Link to='/login'>
                    <span className='material-icons-sharp'>notifications</span></Link>
                    <h4>Notifications</h4>
                </div>
                <div className="settings">
                    <Link to='/setting'>
                    <span className='material-icons-sharp'>settings</span></Link>
                    <h4>Settings</h4>
                </div>
            </div>
            <Link to='/mybookings'>
            <button id='booked-btn'>My bookings</button></Link>
            <Link to='/cancel'>
            <button id='cancel-btn'>Cancel bookings</button></Link>
            <div className="logout">
              <Link to="/login">
              <span className='material-icons-sharp'>logout</span></Link>
              <h4>Logout</h4>
            </div>
        </aside>
        <main>
            <h2> Smart Room Allocation</h2>
            <div className="main-top">
                <input
                    type='text'
                    className='search'
                    placeholder='Search rooms'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                           const term = searchTerm.toLowerCase();
                           if (term.includes('2 screens') || term.includes('microphone')) {
                            navigate('/resource1');
                           } else {
                            alert('No match found');
                           }
                        }
                    }}
                />

            </div>
            <h3>Available Rooms Today</h3>
            <div className='all-rooms'>
                    <div className='rooms-row'>
                        {rooms && rooms.map((item) =>(
                            <div className="rooms">
                                <img src={room4}></img>
                                <div className="room-details" key={item.roomNumber}>
                                    <h4><b>Room No:</b> {item.roomNumber}</h4>
                                    <h4><b>Room Type:</b> {item.roomType}</h4>
                                    <h4><b>Capacity:</b> {item.capacity}</h4>
                                    <h4><b>Status:</b> {item.status}</h4>
                                    <Link to={`/form/${item.id}`}>
                                    <button onClick={()=> displayDetails(item.id)} id='book-btn'>Add booking</button></Link>
                                </div> 
                            </div>
                        ))}
                    </div>   
               
            </div>
        </main>
    </div>
  )
}

export default Home