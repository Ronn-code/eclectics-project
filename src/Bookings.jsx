import './bookings.css';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Bookings() {
  const Navigate = useNavigate('');
  useEffect(() => {
    const viewButtons = document.querySelectorAll('.view-link');

    

    viewButtons.forEach(button => {
      button.addEventListener('click', function (event) {
        event.preventDefault();

        const row = this.closest('tr');
        const name = row.children[0].textContent;
        const email = row.children[1].textContent;
        const roomNo = row.children[2].textContent;
        const capacity = row.children[4].textContent;

        alert(`Booking Details:\n\nName: ${name}\nEmail: ${email}\nRoom No: ${roomNo}\nCapacity: ${capacity}`);
        Navigate('/admin')
      });
    });
    return () => {
      viewButtons.forEach(button => {
        button.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="booking-container">
      <div className="top">
        <span className="material-icons-sharp">build</span>
        <h2>Upcoming Bookings</h2>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Room.No</th>
            <th>Resource.Assigned</th>
            <th>Capacity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Michael Culhane</td>
            <td>mikeculhane@gmail.com</td>
            <td>234</td>
            <td>Whiteboard</td>
            <td>100+</td>
            <td><a href="#" className="view-link">View</a></td>
          </tr>
          <tr>
            <td>Jane Doe</td>
            <td>jane@example.com</td>
            <td>123</td>
            <td>Projector</td>
            <td>50</td>
            <td><a href="#" className="view-link">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Bookings;