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
    const removeDetails = (id) =>{
        if(window.confirm('Are You Sure You want to Delete?')){
            fetch('http://localhost:8001/bookings/' +id,{
                method: 'DELETE',
            })
            .then((res)=>{
                alert("Booking Deleted");
                window.location.reload();
            })
            .catch((err)=>(err.message))
        }
    }
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
                        <th>Room Number</th>
                        <th>purpose</th>
                        <th>notes</th>
                        <th>status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((item) => (
                        <tr className='top-row'key={item.id}>
                            <td>{item.startTime}</td>
                            <td>{item.endTime}</td>
                            <td>{item.roomNumber}</td>
                            <td>{item.purpose}</td>
                            <td>{item.notes}</td>
                            <td>{item.status.toUpperCase()}</td>
                            <td className='action-btn'>
                                <button id='remove-btn'onClick={() => removeDetails(item.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  )
}

export default Mybookings;