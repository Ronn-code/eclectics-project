import {Link, useNavigate, useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import './form.css';


function Form(){
 
    
  const{roomid} = useParams();
  
  const[room, setRoom] = useState({});

  useEffect(() =>{
    fetch('http://localhost:8001/rooms/' +roomid)
    .then((res) => res.json())
    .then((data) =>setRoom(data))
    .catch((err) =>console.log(err.message))
  },[]);

const [today, setToday] = useState('');
const [date, setDate] = useState('');
const [time, setTime] = useState('');
const Navigate = useNavigate('');

useEffect(() =>{
    const now = new Date();
    const formatted = now.toISOString().split('T')[0];
    setToday(formatted);
}, []);

const handleSave = () =>{
    if (!date || !time){
        alert('Please fill in both date and time')
        return;
    }
    alert('Booking saved successfully');
    Navigate('/')
};

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
                </div>
            )}
            <div className="select-period">
                <label htmlForfor='date'>Date</label>
                <input type='date'id='date' min={today} value={date} onChange={(e) => setDate(e.target.value)}></input><br></br>
                <label Htmlfor='time'>Time</label>
                <input type='time' id='time'value={time} onChange={(e) => setTime(e.target.value)}></input>
            </div>
            <div className="final-btn">
                <button id='btn-save' onClick={handleSave}>Save</button>
                <button id='back-btn'onClick={handleEdit}>Back</button>
            </div>
        </div>
    );
}
export default Form;