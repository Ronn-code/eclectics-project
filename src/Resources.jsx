import './resources.css';
import { Link, useNavigate } from 'react-router-dom';

function Resources(){

    const Navigate = useNavigate('');
    const handleDelete = () => {
        alert(`Are You Sure You Want To Delete Data`);
        Navigate('/admin');
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
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Projector</td>
                        <td>23</td>
                        <td className='actions'>
                            <Link to='/addresource'>
                            <button id='editing-btn'>Edit</button></Link>
                            <button id='delete-btn'onClick={handleDelete}>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Screen</td>
                        <td>31</td>
                        <td className='actions'>
                            <Link to='/addresource'>
                            <button id='editing-btn'>Edit</button></Link>
                            <button id='delete-btn'onClick={handleDelete}>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Computers</td>
                        <td>76</td>
                        <td className='actions'>
                            <Link to='/addresource'>
                            <button id='editing-btn'>Edit</button></Link>
                            <button id='delete-btn'onClick={handleDelete}>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Whiteboard</td>
                        <td>12</td>
                        <td className='actions'>
                            <Link to='/addresource'>
                            <button id='editing-btn'>Edit</button></Link>
                            <button id='delete-btn'onClick={handleDelete}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Resources;