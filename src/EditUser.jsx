import {useEffect, useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './adduser.css';

function EditUser() {

const [fullName, setName] = useState('');
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [department, setDepartment] = useState('');
const [role, setRole] = useState('');
const [totalBookings, setTotalBookings] = useState('');
const [usageStreak, setUsageStreak] = useState('');
const [createdAt, setCreatedAt] = useState('');

const Navigate = useNavigate('');
const {userid} = useParams();

useEffect(()=>{
    fetch('http://localhost:8001/users/'+userid)
    .then((res)=>res.json())
    .then((data)=>{
        setName(data.fullName);
        setUsername(data.username);
        setEmail(data.email);
        setDepartment(data.department);
        setRole(data.role);
        setTotalBookings(data.totalBookings);
        setCreatedAt(data.createdAt);
        setUsageStreak(data.usageStreak)
    })
},[]);

const handleSubmit = (e) =>{
  e.preventDefault();

  const users = {fullName, username, email, department, role, totalBookings,usageStreak,createdAt};
  fetch('http://localhost:8001/users/'+userid,{
    method: 'PUT',
    headers: {
      "content-type" : "application/json"
    },
    body: JSON.stringify(users)
  })
  .then((res)=>{
    alert("User Details Updated Successfully");
    Navigate('/user')
  })
  .catch((err)=>console.log(err.message))
}

const handleBack = ()=>{
    Navigate('/user')
}


  return (
    <div className='add-user-container'>
      <h2>Edit User Details</h2>
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
      
        <div className="edits-btn">
            <button id='btn-edit' onClick={handleSubmit}>Update</button>
            <button id='back-btn'onClick={handleBack}>Back</button>
            </div>
        </div>
  )
}

export default EditUser
