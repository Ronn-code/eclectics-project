import './cancel.css';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

function Mybookings() {
    const [bookings, setBookings] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:8001/bookings')
         .then(res => {
            if(!res.ok){
                throw new Error('Network not responding');
            }
            return res.json();
         })
         .then(data => setBookings(data))
         .catch(err => {
            console.error('Failed to fetch booking data:', err);
         });
    }, []);
  return (
    <div className='cancel-page'>
        <div className="top-cancel">
            <Link to='/'>
            <span class="material-icons-sharp">event</span></Link>
            <h3>My Bookings</h3>
        </div>
        
            <table>
                <thead>
                    <tr>
                        <th>startTime</th>
                        <th>endTime</th>
                        <th>purpose</th>
                        <th>notes</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((item) => (
                        <tr className='top-row'key={item.id}>
                            <td>{item.startTime}</td>
                            <td>{item.endTime}</td>
                            <td>{item.purpose}</td>
                            <td>{item.notes}</td>
                            <td>{item.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  )
}

export default Mybookings;