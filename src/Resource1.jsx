import {Link} from 'react-router-dom';
import './resource1.css'
import room1 from './images/room1.jpg'
import room2 from './images/room2.jpg'
import room3 from './images/room3.jpg'
import room4 from './images/room4.jpg'
import { useState } from 'react';


function Resource1(){

    return(
        <div className="resource">
            <div className='top-resource'>
                <h2>Explore Rooms</h2>
                <Link to='/'>
                <button id='home'>Home</button></Link>
            </div>
            <div className="all">
                <div className="rows">
                    <div className="rooms">
                        <img src={room1}></img>
                        <div className="img-details">
                            <h4><b>Room no:</b> 102</h4>
                            <h4><b>Capacity:</b> 31-100</h4>
                            <h4><b>Resources:</b> 2 Screens, Microphone</h4>
                            <Link to='/form'>
                            <button id='book-btn'>Add Booking</button></Link>
                        </div>
                    </div>
                    <div className="rooms">
                        <img src={room2}></img>
                        <div className="img-details">
                            <h4><b>Room no:</b> 102</h4>
                            <h4><b>Capacity:</b> 100+</h4>
                            <h4><b>Resources:</b> 2 Screens, Microphone</h4>
                            <Link to='/form'>
                            <button id='book-btn'>Add Booking</button></Link>
                        </div>
                    </div>
                    <div className="rooms">
                        <img src={room3}></img>
                        <div className="img-details">
                            <h4><b>Room no:</b> 102</h4>
                            <h4><b>Capacity:</b> 31-100</h4>
                            <h4><b>Resources:</b> 2 Screens, Microphone</h4>
                            <Link to='/form'>
                            <button id='book-btn'>Add Booking</button></Link>
                        </div>
                    </div>
                </div>
                <div className="rows">
                    <div className="rooms">
                        <img src={room2}></img>
                        <div className="img-details">
                            <h4><b>Room no:</b> 102</h4>
                            <h4><b>Capacity:</b> 100+</h4>
                            <h4><b>Resources:</b> 2 Screens, Microphone</h4>
                            <Link to='/form'>
                            <button id='book-btn'>Add Booking</button></Link>
                        </div>
                    </div>
                    <div className="rooms">
                        <img src={room3}></img>
                        <div className="img-details">
                            <h4><b>Room no:</b> 102</h4>
                            <h4><b>Capacity:</b> 31-100</h4>
                            <h4><b>Resources:</b> 2 Screens, Microphone</h4>
                            <Link to='/form'>
                            <button id='book-btn'>Add Booking</button></Link>
                        </div>
                    </div>
                    <div className="rooms">
                        <img src={room4}></img>
                        <div className="img-details">
                            <h4><b>Room no:</b> 102</h4>
                            <h4><b>Capacity:</b> 100+</h4>
                            <h4><b>Resources:</b> 2 Screens, Microphone</h4>
                            <Link to='/form'>
                            <button id='book-btn'>Add Booking</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Resource1;