import './user.css';
import { Link, useNavigate } from 'react-router-dom';

function User(){
    
    const Navigate = useNavigate('');

    const handleDelete = () => {
        alert(`Are You Sure You Want To Delete Data`);
        Navigate('/admin')
    }
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
                            <Link to='/adduser'>
                            <button id='editing-btn'>Edit</button></Link>
                            <button id='delete-btn'onClick={handleDelete}>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Dr.Albert Simiyu</td>
                        <td>albertsimiyu@gmail.com</td>
                        <td>Lecturer</td>
                        <td className='actions'>
                            <Link to='/adduser'>
                            <button id='editing-btn'>Edit</button></Link>
                            <button id='delete-btn'onClick={handleDelete}>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Dr.Albert Simiyu</td>
                        <td>albertsimiyu@gmail.com</td>
                        <td>Lecturer</td>
                        <td className='actions'>
                            <Link to='/adduser'>
                            <button id='editing-btn'>Edit</button></Link>
                            <button id='delete-btn'onClick={handleDelete}>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Dr.Albert Simiyu</td>
                        <td>albertsimiyu@gmail.com</td>
                        <td>Lecturer</td>
                        <td className='actions'>
                            <Link to='/adduser'>
                            <button id='editing-btn'>Edit</button></Link>
                            <button id='delete-btn'onClick={handleDelete}>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Dr.Albert Simiyu</td>
                        <td>albertsimiyu@gmail.com</td>
                        <td>Lecturer</td>
                        <td className='actions'>
                            <Link to='/adduser'>
                            <button id='editing-btn'>Edit</button></Link>
                            <button id='delete-btn'onClick={handleDelete}>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Dr.Albert Simiyu</td>
                        <td>albertsimiyu@gmail.com</td>
                        <td>Lecturer</td>
                        <td className='actions'>
                            <Link to='/adduser'>
                            <button id='editing-btn'>Edit</button></Link>
                            <button id='delete-btn'onClick={handleDelete}>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Dr.Albert Simiyu</td>
                        <td>albertsimiyu@gmail.com</td>
                        <td>Lecturer</td>
                        <td className='actions'>
                            <Link to='/adduser'>
                            <button id='editing-btn'>Edit</button></Link>
                            <button id='delete-btn'onClick={handleDelete}>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Dr.Albert Simiyu</td>
                        <td>albertsimiyu@gmail.com</td>
                        <td>Lecturer</td>
                        <td className='actions'>
                            <Link to='/adduser'>
                            <button id='editing-btn'>Edit</button></Link>
                            <button id='delete-btn'onClick={handleDelete}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default User;