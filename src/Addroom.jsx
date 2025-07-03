import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './addroom.css';

function Addroom() {

const [roomNumber, setRoomNumber] = useState('');
const [roomType, setRoomType] = useState('');
const [capacity, setCapacity] = useState('');
const [building, setBuilding] = useState('');
const [name, setName] = useState('');
const [status, setStatus] = useState('');
const Navigate = useNavigate('');

const handleSubmit = (e) =>{
  e.preventDefault();
  const rooms = {roomNumber, roomType, name, capacity, status, building};
  console.log(rooms);

  fetch('http://localhost:8001/rooms',{
    method: 'POST',
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify(rooms)
  })
  .then((res) =>{
    alert('New Room Added Successfully');
    Navigate('/admin')
  })
  .catch((err) =>console.log(err.message))
}

  return (
    <div className='add-room-container'>
      <h2>Add New Room</h2>
      <div className="form-group">
        <div className="room-number">
            <label htmlFor='roomNo'>Room Number</label>
            <input type='number' 
                   id='roonNo' 
                   value={roomNumber}
                   onChange={(e) => setRoomNumber(e.target.value)}placeholder='101'></input>
        </div>
        <div className="name">
            <label htmlFor='name'>Name</label>
            <input  type='text'
                    id='name'
                    value={name} 
                    onChange={(e) => setName(e.target.value)}placeholder='physics lab'></input>
        </div>
        <div className="room-type">
            <label htmlFor='roomType'>Room Type</label>
            <input  id='roomType'
                    type='text'
                    value={roomType} 
                    onChange={(e) => setRoomType(e.target.value)}placeholder='Main conference hall'></input>
        </div>
         <div className="building">
            <label htmlFor='building'>Building</label>
            <input  type='text'
                    id='building'
                    value={building}
                    onChange={(e) => setBuilding(e.target.value)}placeholder='Kilele block'></input>
        </div>
        <div className="capacity">
            <label htmlFor='capacity'>Capacity</label>
            <input type='text'
             id='capacity'
             value={capacity}
             onChange={(e) => setCapacity(e.target.value)}placeholder='100'></input>
        </div>
         <div className="status">
            <label htmlFor='status'>Status</label>
            <input type='text'
             id='status'
             value={status}
             onChange={(e) => setStatus(e.target.value)}placeholder='Available'></input>
        </div>
        <button id='add'onClick={handleSubmit}>Add Room</button>
      </div>
    </div>
  )
}

export default Addroom
