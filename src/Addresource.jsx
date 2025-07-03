import {useState} from 'react';
import './addroom.css';
import { useNavigate } from 'react-router-dom';

function Addresource() {


const [name, setName] = useState('');
const [type, setType] = useState('');
const [description, setDescription] = useState('');
const Navigate = useNavigate('');

const handleSubmit = (e)=>{
  e.preventDefault();

  const equipment = {name, type, description};
  console.log(equipment);

  fetch('http://localhost:8001/equipment', {
    method: 'POST',
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify(equipment)
  })
  .then((res)=>{
    alert("New Resource Added  Successfully");
    Navigate('/admin')
  })
  .catch((err)=>console.log(err.message))
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
        <button id='add' onClick={handleSubmit}>Add Resource</button>
      </div>
    </div>
  )
}

export default Addresource
