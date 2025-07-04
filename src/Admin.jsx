import { useEffect, useState } from 'react';
import './admin.css';
import {Link, useNavigate} from 'react-router-dom';


function Admin (){

    const Navigate = useNavigate('');

    const displayDetails = (id)=>{
        Navigate("/view/user/" +id)
    }

    const [users, setUsers] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:8001/users')
        .then((res) =>res.json())
        .then((data) =>setUsers(data))
        .catch((err) =>console.log(err.message))
    }, []);
    return(
        <div className="admin-container">
            <aside className='admin-aside'>
                <h2>Admin Dashboard</h2>
                <ul className='side-links'>
                    <li className='link-details'>
                        <div className="details">
                            <span className='material-icons-sharp'>people</span>
                            <Link to='/user'>
                            <h4>Manage Users</h4></Link>
                        </div>
                    </li>
                     <li className='link-details'>
                        <div className="details">
                            <span className='material-icons-sharp'>assignment</span>
                            <Link to='/resources'>
                            <h4>Manage Resources</h4></Link>
                        </div>
                    </li>
                     <li className='link-details'>
                        <div className="details">
                            <span className='material-icons-sharp'>meeting_room</span>
                            <Link to='/rooms'>
                            <h4>Manage Rooms</h4></Link>
                        </div>
                    </li>
                     <li className='link-details'>
                        <div className="details">
                            <span className='material-icons-sharp'>check_circle_outline</span>
                            <Link to='/bookings'>
                            <h4>Room Bookings</h4></Link>
                        </div>
                    </li>
                    <li className='link-details'>
                        <div className="details">
                            <span className='material-icons-sharp'>settings</span>
                            <Link to='/asetting'>
                            <h4>Settings</h4></Link>
                        </div>
                    </li>
                     <li className='link-details'>
                        <div className="details">
                            <span className='material-icons-sharp'>logout</span>
                            <Link to='/alogin'>
                            <h4>Logout</h4></Link>
                        </div>
                    </li>
                </ul>
            </aside>
            <main>
                <div className="upper-main">
                    <div className="upper-div">
                        <h3>Active Users</h3>
                        <h1>1394</h1>
                    </div>
                    <div className="upper-div-two">
                        <Link to='/rooms'>
                        <h3>Rooms Available</h3>
                        <h1>2400</h1></Link>
                    </div>
                    <div className="upper-div-three">
                        <Link to='/bookings'>
                        <h3>Upcoming Bookings</h3>
                        <h1>502</h1></Link>
                    </div>
                    
                </div>
                <div className="body-main">
                    <h3>Active Users</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Department</th>
                                <th>Streak</th>
                                <th>CreatedOn</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item) =>(
                                <tr key={item.id}>
                                    <td>{item.fullName}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role.toUpperCase()}</td>
                                    <td>{item.department}</td>
                                    <td>{item.usageStreak}</td>
                                    <td>{item.createdAt}</td>
                                    <td className='actions'>
                                        <button id='review-btn'onClick={() => displayDetails(item.id)}>View</button>
                                </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
export default Admin;