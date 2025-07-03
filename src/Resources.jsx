import { useEffect, useState } from 'react';
import './resources.css';
import { Link, useNavigate } from 'react-router-dom';

function Resources(){

    const[equipment, setEquipment] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:8001/equipment')
        .then((res) =>res.json())
        .then((data)=>setEquipment(data))
        .catch((err)=>console.log(err.message))
    }, []);

    const Navigate = useNavigate('');
    const handleDelete = () => {
        alert(`Are You Sure You Want To Delete Data`);
        Navigate('/admin');
    }
    return(
        <div className="resources-container">
            <div className="title">
                <span className='material-icons-sharp'>build</span>
                <h2>Resources Management</h2>
            </div>
            <Link to='/addresource'>
            <button id='add-btn'><span className='material-icons-sharp'>add</span>Add Resource</button></Link>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {equipment.map((item)=>(
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.type}</td>
                            <td>{item.description}</td>
                            <td className='actions'>
                                <Link to='/addresource'>
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
export default Resources;