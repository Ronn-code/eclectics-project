import {Link, useNavigate, useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import './form.css';


function Form(){
 
    
  const{roomid} = useParams();
  
  const[room, setRoom] = useState({});

  useEffect(() =>{
    fetch('http://localhost:8001/rooms/' +roomid)
    .then((res) => res.json())
    .then((data) =>{setRoom(data);
        setRoomNumber(data.roomNumber);
        setStatus(data.status);})
    .catch((err) =>console.log(err.message))
  },[]);

const [today, setToday] = useState('');
const [startTime, setStartTime] = useState('');
const [endTime, setEndTime] = useState('');
const [roomNumber, setRoomNumber] =useState('');
const [purpose, setPurpose] = useState('');
const [notes, setNotes] = useState('');
const[status, setStatus]=useState("");
const Navigate = useNavigate('');

const handleSave = (e) =>{
    e.preventDefault();

    const bookings = {startTime, endTime, roomNumber,status, purpose, notes};
    console.log(bookings);
    
    fetch('http://localhost:8001/bookings',{
        method: 'POST',
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(bookings)
    })
    .then((res)=>{
        alert('Booking Done');
        Navigate('/')
    })
    .catch((err)=>console.log(err.message))
}

const handleEdit =() =>{
    Navigate('/');
}

    return(
        <div className="form-page">
            <div className="form-top">
                <h2>Booking details</h2>
            </div>
            {room &&  (
                <div>
                    <h4><b>Room No:</b> {room.roomNumber}</h4>
                    <h4><b>Room Type:</b> {room.roomType}</h4>
                    <h4><b>Name:</b> {room.name}</h4>
                    <h4><b>Capacity:</b> {room.capacity}</h4>
                    <h4><b>Status:</b> {room.status}</h4>
                </div>
            )}
            <div className="select-period">
                <div className="start">
                    <label htmlForfor='start'>startTime</label>
                    <input type='time'id='start' value={startTime} onChange={(e) => setStartTime(e.target.value)}></input>
                </div>
                <div className="end">
                    <label htmlForfor='end'>startTime</label>
                    <input type='time'id='end' value={endTime} onChange={(e) => setEndTime(e.target.value)}></input>
                </div>
                
                <div className="purpose">
                    <label Htmlfor='purpose'>Purpose</label>
                    <input type='text' id='purpose'value={purpose} onChange={(e) => setPurpose(e.target.value)}></input>
                </div>
                <div className="notes">
                    <label Htmlfor='notes'>Notes</label>
                    <input type='text' id='notes'value={notes} onChange={(e) => setNotes(e.target.value)}></input>
                </div>
            </div>
            <div className="final-btn">
                <button id='btn-save' onClick={handleSave}>Save</button>
                <button id='back-btn'onClick={handleEdit}>Back</button>
            </div>
        </div>
    );
}
export default Form;