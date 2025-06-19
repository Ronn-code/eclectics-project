import './resources.css';
import { Link } from 'react-router-dom';

function Resources(){
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
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Whiteboards</td>
                        <td>32</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Projector</td>
                        <td>23</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>DScreens</td>
                        <td>125</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Whiteboards</td>
                        <td>21</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Computers</td>
                        <td>76</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Screens</td>
                        <td>12</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Screens</td>
                        <td>2</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Whiteboards</td>
                        <td>5</td>
                        <td className='actions'>
                            <button id='editing-btn'>Edit</button>
                            <button id='delete-btn'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Projectors</td>
                        <td>10</td>
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
export default Resources;