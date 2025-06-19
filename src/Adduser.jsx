import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './adduser.css';

function Adduser() {


const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [role, setRole] = useState('');
const Navigate = useNavigate('');

const handleAdd = () => {
    if( name && email && phone && role) {
        alert(`User added \nName: ${name} \nEmail: ${email} \nPhone NO: ${phone} \nRole: ${role}`);
        Navigate('/admin')
    }
    else{
        alert('Fill in all the fields');

        setEmail('');
        setName('');
        setPhone('');
        setRole('');
    }
};


  return (
    <div className='add-user-container'>
      <h2>Add New User</h2>
      <div className="name">
        <label htmlFor='name'>Name</label>
        <input type='text' 
               id='name' 
               value={name}
               onChange={(e) => setName(e.target.value)}
               placeholder='Enter User Name'></input>
      </div>
      <div className="email">
        <label htmlFor='email'>Email</label>
        <input type='text'
               id='email' 
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder='Enter User Email'></input>
      </div>
      <div className="phone">
        <label htmlFor='phone'>Phone Number</label>
        <input type='number'
               id='phone'
               value={phone}
               onChange={(e) => setPhone(e.target.value)}
               placeholder='phone number'></input>
      </div>
      <div className="role">
        <label htmlFor='role'>Role</label>
        <input type='text'
               id='role'
               value={role}
               onChange={(e) => setRole(e.target.value)}
               placeholder='lecturer'></input>
      </div>
      <button id='add' onClick={handleAdd}>Add User</button>
    </div>
  )
}

export default Adduser
