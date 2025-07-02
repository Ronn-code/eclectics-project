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

useEffect(() => {
    fetch('http://localhost:8080/api/rooms')
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

    const [isOpen, setIsOpen] = useState(false);

    const bookings = [
        '21/04/2025 - Room 101 - 10.00am',
        '22/04/2025 - Room 121 - 1.00pm',
        '23/04/2025 - Room 10 - 10.00am',
        '23/04/2025 - Room 92 - 3.00pm',
    ];
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
            <div className="bookings">
                <span className="material-icons-sharp">event</span>
                <h4> My Bookings</h4>
                <span className='material-icons-sharp' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? 'expand_less' : 'expand_more'}
                </span>
            </div>   
            {isOpen &&(
                <ul className='dropdown-list'>
                  {bookings.map((booking, index) =>(
                    <li key={index}>{booking}</li>
                  ))}
                </ul>
            )}
            <Link to='/cancel'>
            <button id='cancel-btn'>Cancel bookings</button></Link>
            <div className="logout">
              <Link to="/login">
              <span className='material-icons-sharp'>logout</span></Link>
              <h4>Logout</h4>
            </div>
        </aside>
        <main>
            <div className="top-bar">
                <Link to='/login'>
                <span className='material-icons-sharp'>person</span></Link>
                <span className='material-icons-sharp'>notifications</span>
                <Link to='/setting'>
                <span className='material-icons-sharp'>settings</span></Link>
            </div>
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
                    <div className="rooms">
                        <img src={room1}></img>
                        <div className="room-details">
                            <h4><b>Room no: 102</b></h4>
                            <h4><b>Capacity:</b> maximum 60 students</h4>
                            <h4><b>Resources:</b> Whiteboard, 2 screens</h4>
                            <Link to='/form'>
                            <button id='book-btn'>Add booking</button></Link>
                        </div>
                    </div>
                    <div className="rooms">
                        <img src={room2}></img>
                        <div className="room-details">
                            <h4><b>Room no: 102</b></h4>
                            <h4><b>Capacity:</b> maximum 60 students</h4>
                            <h4><b>Resources:</b> Whiteboard, 2 screens</h4>
                            <Link to='/form'>
                            <button id='book-btn'>Add booking</button></Link>
                        </div>
                    </div>
                </div>
                <div className='rooms-row'>
                    <div className="rooms">
                        <img src={room4}></img>
                        {rooms.map((room, index) =>(
                           <div className="room-details" key={index}>
                            <h4><b>{room.room_number}</b></h4>
                            <h4><b>{room.room_type}</b></h4>
                            <h4><b>{room.equipment.join(', ')}</b></h4>
                            <Link to='/form'>
                            <button id='book-btn'>Add booking</button></Link>
                        </div> 
                        ))}
                        <div className="room-details">
                            <h4><b>Room no: 102</b></h4>
                            <h4><b>Capacity:</b> maximum 60 students</h4>
                            <h4><b>Resources:</b> Whiteboard, 2 screens</h4>
                            <Link to='/form'>
                            <button id='book-btn'>Add booking</button></Link>
                        </div>
                    </div>
                    <div className="rooms">
                        <img src={room3}></img>
                        <div className="room-details">
                            <h4><b>Room no: 102</b></h4>
                            <h4><b>Capacity:</b> maximum 60 students</h4>
                            <h4><b>Resources:</b> Whiteboard, 2 screens</h4>
                            <Link to='/form'>
                            <button id='book-btn'>Add booking</button></Link>
                        </div>
                    </div>
                </div>
                <div className='rooms-row'>
                    <div className="rooms">
                        <img src={room1}></img>
                        <div className="room-details">
                            <h4><b>Room no: 102</b></h4>
                            <h4><b>Capacity:</b> maximum 60 students</h4>
                            <h4><b>Resources:</b> Whiteboard, 2 screens</h4>
                            <Link to='/form'>
                            <button id='book-btn'>Add booking</button></Link>
                        </div>
                    </div>
                    <div className="rooms">
                        <img src={room2}></img>
                        <div className="room-details">
                            <h4><b>Room no: 102</b></h4>
                            <h4><b>Capacity:</b> maximum 60 students</h4>
                            <h4><b>Resources:</b> Whiteboard, 2 screens</h4>
                            <Link to="/resource1">
                            <button id='book-btn'>Add booking</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Home