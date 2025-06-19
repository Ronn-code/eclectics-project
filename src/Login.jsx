import './login.css';
import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react'
import profile from './images/profile3.jpg';

function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const navigate = useNavigate();

    const isValidEmail = (email) => {
       return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    const handleLogin = () => {
    if (!isValidEmail(email)) {
      alert('Please enter  email address');
      return;
    }
    if (!password) {
      alert('Please enter your password');
      return;
    }
    navigate('/');
    };
 
    const [rememberMe, setRememberMe] = useState(false);
  return (
    <div className='login-page'>
        <div className="top-login">
           <img src={profile}></img>
           <h2>Sign In</h2>
        </div>
        <div className="inputs">
            <div className="input-wrapper">
                <input type='email' placeholder='Enter your email'value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className="input-wrapper">
                <input type='password' placeholder='Enter your password'value={password}onChange={(e) => setPassword(e.target.value)}></input>
            </div>
        </div>
       
        <button id='login-btn'onClick={handleLogin}>Login</button>
        <div className="forgot-details">
            <div className="remember-me">
                <span className='material-icons-sharp'onClick={()=> setRememberMe (!rememberMe)}>
                    {rememberMe? 'check_box' : 'check_box_outline_blank'}</span>
                <h4>Remember me</h4>
            </div>
            <a href='#'>forgot password</a>
        </div>
    </div>
  )
}

export default Login