import { useEffect, useState } from 'react';
import './user.css';
import { Link, useNavigate } from 'react-router-dom';

function User(){

    const editDetails = (id)=>{
        Navigate("/edit/user/" +id)
    }

    const[users, setUsers] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:8001/users')
        .then((res) =>res.json())
        .then((data) =>setUsers(data))
        .catch((err) =>console.log(err.message))
    }, []);
    
    const Navigate = useNavigate('');

    const handleDelete = () => {
        alert(`Are You Sure You Want To Delete Data`);
        Navigate('/admin')
    }

    const removeDetails = (id) =>{
        if(window.confirm('Are You Sure You want to Delete?')){
            fetch('http://localhost:8001/users/' +id,{
                method: 'DELETE',
            })
            .then((res)=>{
                alert("User Deleted");
                window.location.reload();
            })
            .catch((err)=>(err.message))
        }
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
                        <th>Full Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Department</th>
                        <th>Total bookings</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {users.map((item)=>(
                        <tr key={item.id}>
                            <td >{item.fullName}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.role.toUpperCase()}</td>
                            <td>{item.department}</td>
                            <td>{item.totalBookings}</td>
                            <td className='actions'>
                                <button id='editing-btn'onClick={()=>editDetails(item.id)}>Edit</button>
                                <button id='delete-btn'onClick={()=>removeDetails(item.id)}>Delete</button>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default User;