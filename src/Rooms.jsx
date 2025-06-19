import './rooms.css';
import { Link } from 'react-router-dom';

function Rooms(){
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
                        <th>Room No.</th>
                        <th>Capacity</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>26</td>
                        <td>121</td>
                        <td>Good condition</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>60</td>
                        <td>30</td>
                        <td>Good condition</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>87</td>
                        <td>112</td>
                        <td>Under maintenance</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>26</td>
                        <td>121</td>
                        <td>Good condition</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>102</td>
                        <td>100</td>
                        <td>Under maintenance</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>26</td>
                        <td>121</td>
                        <td>Good condition</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>26</td>
                        <td>121</td>
                        <td>Good condition</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>60</td>
                        <td>30</td>
                        <td>Good condition</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>87</td>
                        <td>112</td>
                        <td>Under maintenance</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>26</td>
                        <td>121</td>
                        <td>Good condition</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>102</td>
                        <td>100</td>
                        <td>Under maintenance</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Rooms;