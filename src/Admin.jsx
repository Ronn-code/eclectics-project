import './admin.css';
import {Link} from 'react-router-dom';


function Admin (){
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
                            <h4>Room Bookings</h4>
                        </div>
                    </li>
                    <li className='link-details'>
                        <div className="details">
                            <span className='material-icons-sharp'>settings</span>
                            <Link to='/setting'>
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
                        <h3>Rooms Available</h3>
                        <h1>2400</h1>
                    </div>
                    <div className="upper-div-three">
                        <h3>Upcoming Bookings</h3>
                        <h1>502</h1>
                    </div>
                    
                </div>
                <div className="body-main">
                    <h3>Upcoming Bookings</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Room number</th>
                                <th>Capacity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ann Culhane</td>
                                <td>102</td>
                                <td>100+</td>
                                <td className='actions'>
                                    <button id='review-btn'>Review</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Ann Culhane</td>
                                <td>102</td>
                                <td>100+</td>
                                <td className='actions'>
                                    <button id='review-btn'>Review</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Ann Culhane</td>
                                <td>102</td>
                                <td>100+</td>
                                <td className='actions'>
                                    <button id='review-btn'>Review</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Ann Culhane</td>
                                <td>102</td>
                                <td>100+</td>
                                <td className='actions'>
                                    <button id='review-btn'>Review</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Ann Culhane</td>
                                <td>102</td>
                                <td>100+</td>
                                <td className='actions'>
                                    <button id='review-btn'>Review</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Ann Culhane</td>
                                <td>102</td>
                                <td>100+</td>
                                <td className='actions'>
                                    <button id='review-btn'>Review</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Ann Culhane</td>
                                <td>102</td>
                                <td>100+</td>
                                <td className='actions'>
                                    <button id='review-btn'>Review</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Ann Culhane</td>
                                <td>102</td>
                                <td>100+</td>
                                <td className='actions'>
                                    <button id='review-btn'>Review</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Ann Culhane</td>
                                <td>102</td>
                                <td>100+</td>
                                <td className='actions'>
                                    <button id='review-btn'>Review</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
export default Admin;