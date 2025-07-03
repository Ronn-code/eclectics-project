import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './adduser.css';

function Adduser() {


const [fullName, setName] = useState('');
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [department, setDepartment] = useState('');
const [role, setRole] = useState('');
const [totalBookings, setTotalBookings] = useState('');
const [usageStreak, setUsageStreak] = useState('');
const [createdAt, setCreatedAt] = useState('');
const Navigate = useNavigate('');

const handleSubmit = (e) =>{
  e.preventDefault();

  const users = {fullName, username, email, department, role, totalBookings, usageStreak, createdAt};
  console.log(users);
  fetch('http://localhost:8001/users',{
    method: 'POST',
    headers: {
      "content-type" : "application/json"
    },
    body: JSON.stringify(users)
  })
  .then((res)=>{
    alert("New User Added Successfully");
    Navigate('/admin')
  })
  .catch((err)=>console.log(err.message))
}




  return (
    <div className='add-user-container'>
      <h2>Add New User</h2>
      <div className="name">
        <label htmlFor='name'>Full Name</label>
        <input type='text' 
               id='name' 
               value={fullName}
               onChange={(e) => setName(e.target.value)}
               placeholder='John Doe'></input>
      </div>
      <div className="uname">
        <label htmlFor='uname'>Username</label>
        <input type='text' 
               id='uname' 
               value={username}
               onChange={(e) => setUsername(e.target.value)}
               placeholder='Doe jr'></input>
      </div>
      <div className="email">
        <label htmlFor='email'>Email</label>
        <input type='text'
               id='email' 
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder='name@example.com'></input>
      </div>
      <div className="department">
        <label htmlFor='depart'>Department</label>
        <input type='text'
               id='depart'
               value={department}
               onChange={(e) => setDepartment(e.target.value)}
               placeholder='engineering'></input>
      </div>
      <div className="role">
        <label htmlFor='role'>Role</label>
        <input type='text'
               id='role'
               value={role}
               onChange={(e) => setRole(e.target.value)}
               placeholder='lecturer'></input>
      </div>
      <div className="total">
        <label htmlFor='total'>Total bookings</label>
        <input type='text'
               id='total'
               value={totalBookings}
               onChange={(e) => setTotalBookings(e.target.value)}
               placeholder='0'></input>
      </div>
      <div className="streak">
        <label htmlFor='streak'>Streak</label>
        <input type='text'
               id='streak'
               value={usageStreak}
               onChange={(e) => setUsageStreak(e.target.value)}
               placeholder='0'></input>
      </div>
      <div className="time">
        <label htmlFor='time'>Total bookings</label>
        <input type='text'
               id='time'
               value={createdAt}
               onChange={(e) => setCreatedAt(e.target.value)}
               placeholder='2025-07-01T08:00:00'></input>
      </div>
      <button id='add' onClick={handleSubmit}>Add User</button>
    </div>
  )
}

export default Adduser
