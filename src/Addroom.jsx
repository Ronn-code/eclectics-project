import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './addroom.css';

function Addroom() {

const [roomNo, setRoomNo] = useState('');
const [roomType, setRoomType] = useState('');
const [capacity, setCapacity] = useState('');
const Navigate = useNavigate('');

const handleAdd = () =>{
    if(roomNo && roomType && capacity) {
        alert(`Room added \nRoom Number: ${roomNo} \nRoom Type: ${roomType} \nCapacity: ${capacity}`);
        Navigate('/admin')


        setRoomNo('');
        setRoomType('');
        setCapacity('');
    }
    else{
        alert('Fill in all the fields');

        setRoomNo('');
        setRoomType('');
        setCapacity('');
    }
};


  return (
    <div className='add-room-container'>
      <h2>Add New Room</h2>
      <div className="form-group">
        <div className="room-number">
            <label htmlFor='roomNo'>Room Number</label>
            <input type='number' 
                   id='roonNo' 
                   value={roomNo}
                   onChange={(e) => setRoomNo(e.target.value)}
                   required></input>
        </div>
        <div className="room-type">
            <label htmlFor='roomType'>Room Type</label>
            <select id='roomType'
                    value={roomType} 
                    onChange={(e) => setRoomType(e.target.value)} 
                    required>
                <option value='' disabled selected>Select Type</option>
                <option value='lecture hall'>Lecture Hall</option>
                <option value='science labaratory'>Science Labaratory</option>
                <option value='computer lab'>Computer Lab</option>
                <option value='class'>Class</option>
            </select>
        </div>
        <div className="capacity">
            <label htmlFor='capacity'>Capacity</label>
            <input type='number'
             id='capacity'
             value={capacity}
             onChange={(e) => setCapacity(e.target.value)} 
             required></input>
        </div>
        <button id='add'onClick={handleAdd}>Add Room</button>
      </div>
    </div>
  )
}

export default Addroom
