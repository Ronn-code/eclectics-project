import {Link, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import './form.css';


function Form(){

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
    window.location.reload();
}

    return(
        <div className="form-page">
            <div className="form-top">
                <Link to='/'>
                <span className='material-icons-sharp'>arrow_back_ios</span></Link>
                <h2>Fill in the form below to continue booking</h2>
            </div>
            <h4><b>Name:</b> Julius Waweru</h4>
            <h4><b>Room No:</b> 94</h4>
            <h4><b>Capacity:</b> 31-100</h4>
            <h4><b>Resources:</b> 2 screens,microphone,smartboard</h4>
            <div className="select-period">
                <label for='id'>Date</label>
                <input type='date'id='date' min={today} value={date} onChange={(e) => setDate(e.target.value)}></input><br></br>
                <label for='time'>Time</label>
                <input type='time' id='time'value={time} onChange={(e) => setTime(e.target.value)}></input>
            </div>
            <div className="final-btn">
                <button id='btn-save' onClick={handleSave}>Save</button>
                <button id='btn-edit' onClick={handleEdit}>Edit</button>
            </div>
        </div>
    );
}
export default Form;