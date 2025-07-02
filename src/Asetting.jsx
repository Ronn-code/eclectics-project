
import './setting.css';
import profile from './images/profile3.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Asetting() {


    const[name, setName]= useState('');
    const[email, setEmail]= useState('');
    const[phone, setPhone]= useState('');
    const[id, setId]= useState('');
    const Navigate = useNavigate('');

    const isValidEmail = (email) => {
       return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
 const isValidPhoneNumber = (phone) => {
       return /^\+?\d{10,15}$/.test(phone);
    };
 const isValidKenyanID = (id) => {
  return /^\d{6,8}$/.test(id);
    };

    const handleSave = () =>{
        

        if(!isValidEmail(email)) {
            alert(`Enter a valid email`);
            return;
        }
        if(!name){
            alert(`Enter your Name`);
            return;
        }
        if(!isValidPhoneNumber(phone)){
            alert(`Enter a valid phone number`);
            return;
        }
        if(!isValidKenyanID(id)){
            alert(`Enter a valid ID number`)
            return;
        }
        else{
            alert(`Updated Account details success`);
            Navigate('/admin')
        }
    }


    

    return(
        <div className="setting-page">
            <h2>Account Settings</h2>
            <div className="user-profile">
                <img src={profile}></img>
                <h3>Edit Profile</h3>
            </div>
            <div className="input-fields">
                <div className="input">
                    <div className="top-name">
                        <h4>Name</h4>
                        <span className='material-icons-sharp'>edit</span>
                    </div>
                    <input type='name'
                           value={name}
                           onChange={(e) =>setName(e.target.value)}
                           placeholder='John Doe'></input>
                </div>
                <div className="input">
                    <div className="top-email">
                        <h4>Email</h4>
                        <span className='material-icons-sharp'>edit</span>
                    </div>
                    <input type='email'
                           value={email}
                           onChange={(e) =>setEmail(e.target.value)}
                           placeholder='john@example.com'></input>
                </div>
                <div className="input">
                    <div className="top-id">
                        <h4>Id number</h4>
                        <span className='material-icons-sharp'>edit</span>
                    </div>
                    <input type='text'
                           value={id} 
                           onChange={(e) =>setId(e.target.value)}
                           placeholder='39123456'></input>
                </div>
                <div className="input">
                    <div className="top-phone">
                        <h4>Phone number</h4>
                        <span className='material-icons-sharp'>edit</span>
                    </div>
                    <input type='phone-number'
                           value={phone} 
                           onChange={(e) =>setPhone(e.target.value)}
                           placeholder='07xxxxxxxx'></input>
                </div>
            </div>
            <button id='save-btn'onClick={handleSave}>Save</button>
        </div>
    );
}
export default Asetting;