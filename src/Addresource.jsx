import {useState} from 'react';
import './addroom.css';
import { useNavigate } from 'react-router-dom';

function Addresource() {


const [resourceName, setResourceName] = useState('');
const [quantity, setQuantity] = useState('');
const [assign, setAssign] = useState('');
const Navigate = useNavigate('');


const handleAdd = () => {
    if(resourceName && quantity && assign){
        alert(`Resource added \nResource Name: ${resourceName} \nQuantity: ${quantity} \nAssigned to Room: ${assign}`);
        Navigate('/admin')
    }
    else{
        alert('Fill in all the fields');

        setResourceName('');
        setQuantity('');
        setAssign('');
    }
};


  return (
    <div className='add-resource-container'> 
      <h2>Add New Resource</h2>
      <div className="form-group">
        <div className="resource-name">
            <label htmlFor='resourceName'>Resource Name</label>
            <input type='text'
                   id='resourceName' 
                   value={resourceName}
                   onChange={(e)=> setResourceName(e.target.value)}
                   required></input>
        </div>
        <div className="quantity">
            <label htmlFor='quantity'>Quantity</label>
            <input type='number' 
                   id='quantity'
                   value={quantity} 
                   onChange={(e) => setQuantity(e.target.value)}
                   required></input>
        </div>
        <div className="assign">
            <label htmlFor='assign'>Assign to Room</label>
            <input type='number'
                   id='assign'
                   value={assign} 
                   onChange={(e) => setAssign(e.target.value)}
                   required></input>
        </div>
        <button id='add' onClick={handleAdd}>Add Room</button>
      </div>
    </div>
  )
}

export default Addresource
