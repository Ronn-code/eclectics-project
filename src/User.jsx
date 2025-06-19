import './user.css';
import { Link } from 'react-router-dom';

function User(){
    return(
        <div className="user-container">
            <div className="title">
                <span className='material-icons-sharp'>group</span>
                <h2>User Management</h2>
            </div>
            <Link to='/adduser'>
            <button id='add-btn'><span className='material-icons-sharp'>add</span>Add User</button></Link>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dr.Albert Simiyu</td>
                        <td>albertsimiyu@gmail.com</td>
                        <td>Lecturer</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Dr.Albert Simiyu</td>
                        <td>albertsimiyu@gmail.com</td>
                        <td>Lecturer</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Dr.Albert Simiyu</td>
                        <td>albertsimiyu@gmail.com</td>
                        <td>Lecturer</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Dr.Albert Simiyu</td>
                        <td>albertsimiyu@gmail.com</td>
                        <td>Lecturer</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Dr.Albert Simiyu</td>
                        <td>albertsimiyu@gmail.com</td>
                        <td>Lecturer</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Dr.Albert Simiyu</td>
                        <td>albertsimiyu@gmail.com</td>
                        <td>Lecturer</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Dr.Albert Simiyu</td>
                        <td>albertsimiyu@gmail.com</td>
                        <td>Lecturer</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Dr.Albert Simiyu</td>
                        <td>albertsimiyu@gmail.com</td>
                        <td>Lecturer</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Dr.Albert Simiyu</td>
                        <td>albertsimiyu@gmail.com</td>
                        <td>Lecturer</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Dr.Albert Simiyu</td>
                        <td>albertsimiyu@gmail.com</td>
                        <td>Lecturer</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default User;