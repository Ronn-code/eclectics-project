import { useEffect, useState } from 'react';
import './resources.css';
import { Link, useNavigate } from 'react-router-dom';

function Resources(){

    const editDetails = (id)=>{
        Navigate('/edit/resource/' +id)
    }
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
    const removeDetails = (id) =>{
        if(window.confirm('Are You Sure You want to Delete?')){
            fetch('http://localhost:8001/equipment/' +id,{
                method: 'DELETE',
            })
            .then((res)=>{
                alert("Resource Deleted");
                window.location.reload();
            })
            .catch((err)=>(err.message))
        }
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
                            <td>{item.name.toUpperCase()}</td>
                            <td>{item.type.toLowerCase()}</td>
                            <td>{item.description}</td>
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
export default Resources;