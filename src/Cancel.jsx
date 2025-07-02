import './cancel.css';
import {Link} from 'react-router-dom';

function Cancel() {
  return (
    <div className='cancel-page'>
        <div className="top-cancel">
            <Link to='/'>
            <span class="material-icons-sharp">arrow_back_ios</span></Link>
            <h3>My Bookings</h3>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Venue</th>
                    <th>Time</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr className='top-row'>
                    <td>21/04/2025</td>
                    <td>Room 101</td>
                    <td>10.00am</td>
                    <td className='action-btn'>
                        <Link to='/form'>
                        <button id='edit-btn'>Edit</button></Link>
                        <button id='remove-btn'>Remove</button>
                    </td>
                </tr>
                <tr>
                    <td>21/04/2025</td>
                    <td>Room 11</td>
                    <td>3.00pm</td>
                    <td className='action-btn'>
                        <Link to='/form'>
                        <button id='edit-btn'>Edit</button></Link>
                        <button id='remove-btn'>Remove</button>
                    </td>
                </tr>
                <tr>
                    <td>22/04/2025</td>
                    <td>Room 189</td>
                    <td>11.00am</td>
                    <td className='action-btn'>
                        <Link to='/form'>
                        <button id='edit-btn'>Edit</button></Link>
                        <button id='remove-btn'>Remove</button>
                    </td>
                </tr>
                <tr>
                    <td>23/04/2025</td>
                    <td>Room 93</td>
                    <td>10.00am</td>
                    <td className='action-btn'>
                        <Link to='/form'>
                        <button id='edit-btn'>Edit</button></Link>
                        <button id='remove-btn'>Remove</button>
                    </td>
                </tr>
                
            </tbody>
        </table>
    </div>
  )
}

export default Cancel