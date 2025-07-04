import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './addroom.css';

function EditRoom() {

const [roomNumber, setRoomNumber] = useState('');
const [roomType, setRoomType] = useState('');
const [capacity, setCapacity] = useState('');
const [building, setBuilding] = useState('');
const [name, setName] = useState('');
const [status, setStatus] = useState('');
const Navigate = useNavigate('');

const {roomid} = useParams();

useEffect(()=>{
    fetch('http://localhost:8001/rooms/'+roomid)
    .then((res)=>res.json())
    .then((data)=>{
        setRoomNumber(data.roomNumber);
        setRoomType(data.roomType);
        setName(data.name);
        setCapacity(data.capacity);
        setBuilding(data.building);
        setStatus(data.status)
    })
    .catch((err)=>console.log(err.message))
}, []);

const handleSubmit = (e) =>{
  e.preventDefault();
  const rooms = {roomNumber, roomType, name, capacity, status, building};

  fetch('http://localhost:8001/rooms/'+roomid,{
    method: 'PUT',
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify(rooms)
  })
  .then((res) =>{
    alert('Room Details Updated Successfully');
    Navigate('/rooms')
  })
  .catch((err) =>console.log(err.message))
}
const handleBack = ()=>{
    Navigate('/rooms')
}

  return (
    <div className='add-room-container'>
      <h2>Add New Room</h2>
      <div className="form-group">
        <div className="room-number">
            <label htmlFor='roomNo'>Room Number</label>
            <input type='text' 
                   id='roomNo' 
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
        <div className="edits-btn">
            <button id='btn-edit' onClick={handleSubmit}>Update</button>
            <button id='back-btn'onClick={handleBack}>Back</button>
            </div>
        </div>
    </div>
  )
}

export default EditRoom
