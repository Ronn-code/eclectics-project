import { useEffect, useState } from 'react';
import './rooms.css';
import { Link, useNavigate } from 'react-router-dom';

function Rooms(){

    const editDetails = (id)=>{
        Navigate("/edit/room/" +id)
    }
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

    const removeDetails = (id) =>{
        if(window.confirm('Are You Sure You want to Delete?')){
            fetch('http://localhost:8001/rooms/' +id,{
                method: 'DELETE',
            })
            .then((res)=>{
                alert("Room Deleted");
                window.location.reload();
            })
            .catch((err)=>(err.message))
        }
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
                            <td>{item.roomType.toLowerCase()}</td>
                            <td>{item.building}</td>
                            <td>{item.capacity}</td>
                            <td>{item.status.toUpperCase()}</td>
                            <td className='actions'>
                                <button id='editing-btn'onClick={()=>editDetails(item.id)}>Edit</button>
                                <button id='delete-btn'onClick={()=>removeDetails(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Rooms;