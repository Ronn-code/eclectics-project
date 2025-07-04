import {useEffect, useState} from 'react';
import './addroom.css';
import { useNavigate, useParams } from 'react-router-dom';

function EditResource() {


const [name, setName] = useState('');
const [type, setType] = useState('');
const [description, setDescription] = useState('');
const Navigate = useNavigate('');

const{equipmentid} = useParams();
 useEffect(()=>{
    fetch('http://localhost:8001/equipment/'+equipmentid)
    .then((res)=>res.json())
    .then((data)=>{
        setName(data.name);
        setType(data.type);
        setDescription(data.description)
    })
 }, []);

const handleSubmit = (e)=>{
  e.preventDefault();

  const equipment = {name, type, description};

  fetch('http://localhost:8001/equipment/'+equipmentid, {
    method: 'PUT',
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify(equipment)
  })
  .then((res)=>{
    alert("Resource Details Updates Successfully");
    Navigate('/resources')
  })
  .catch((err)=>console.log(err.message))
}

const handleBack = ()=>{
    Navigate('/resources')
}

  return (
    <div className='add-resource-container'> 
      <h2>Add New Resource</h2>
      <div className="form-group">
        <div className="resource-name">
            <label htmlFor='ame'>Resource Name</label>
            <input type='text'
                   id='name' 
                   value={name}
                   onChange={(e)=> setName(e.target.value)}placeholder='name of resource'></input>
        </div>
        <div className="type">
            <label htmlFor='type'>Type</label>
            <input type='text' 
                   id='type'
                   value={type} 
                   onChange={(e) => setType(e.target.value)}placeholder='type'></input>
        </div>
        <div className="description">
            <label htmlFor='description'>Description</label>
            <input type='text' 
                   id='description'
                   value={description} 
                   onChange={(e) => setDescription(e.target.value)}placeholder='description'></input>
        </div>
        <div className="edits-btn">
            <button id='btn-edit' onClick={handleSubmit}>Update</button>
            <button id='back-btn'onClick={handleBack}>Back</button>
            </div>
        </div>
      
    </div>
  )
}

export default EditResource
