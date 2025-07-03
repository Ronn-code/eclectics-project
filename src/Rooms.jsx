import { useEffect, useState } from 'react';
import './rooms.css';
import { Link, useNavigate } from 'react-router-dom';

function Rooms(){

    const [rooms, setRooms] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:8001/rooms')
        .then((res) =>res.json())
        .then((data) =>setRooms(data))
        .catch((err) =>console.log(err.message))
    }, []);

    const Navigate = useNavigate('');

    const handleDelete = () => {
        alert(`Are You Sure You Want To Delete Data`);
        Navigate('/admin');
    }
    return(
        <div className="rooms-container">
            <div className="title">
                <span className='material-icons-sharp'>maps_home_work</span>
                <h2>Room Management</h2>
            </div>
            <div className="bars">
                <Link to='/addroom'>
                <button id='add-btn'><span className='material-icons-sharp'>add</span>Add Room</button></Link>
                <input type='search-bar' className='my-search-bar' placeholder='search by room number'></input>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Room Number</th>
                        <th>Name</th>
                        <th>Room type</th>
                        <th>Building</th>
                        <th>Capacity</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map((item) =>(
                        <tr>
                            <td>{item.roomNumber}</td>
                            <td>{item.name}</td>
                            <td>{item.roomType}</td>
                            <td>{item.building}</td>
                            <td>{item.capacity}</td>
                            <td>{item.status}</td>
                            <td className='actions'>
                                <Link to='/addroom'>
                                <button id='editing-btn'>Edit</button></Link>
                                <button id='delete-btn'onClick={handleDelete}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Rooms;