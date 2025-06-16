
import './setting.css';
import profile from './images/profile3.jpg';

function Setting() {
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
                    <input type='name' placeholder='enter your name'></input>
                </div>
                <div className="input">
                    <div className="top-email">
                        <h4>Email</h4>
                        <span className='material-icons-sharp'>edit</span>
                    </div>
                    <input type='email' placeholder='enter your email'></input>
                </div>
                <div className="input">
                    <div className="top-id">
                        <h4>Id number</h4>
                        <span className='material-icons-sharp'>edit</span>
                    </div>
                    <input type='number' placeholder='enter your Id no.'></input>
                </div>
                <div className="input">
                    <div className="top-phone">
                        <h4>Phone number</h4>
                        <span className='material-icons-sharp'>edit</span>
                    </div>
                    <input type='phone-number' placeholder='enter your phone no.'></input>
                </div>
            </div>
            <button id='save-btn'>Save</button>
        </div>
    );
}
export default Setting;