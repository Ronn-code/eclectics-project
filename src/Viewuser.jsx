import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Viewuser() {

    const{userid} = useParams();
    const[user, setUser] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:8001/users/${userid}`)
        .then((res)=>{
            if(!res.ok){
                throw new Error("User not found");
            }
            return res.json();
        })
        .then((data)=>setUser(data))
        .catch((err)=>console.log(err.message))
    }, []);
  return (
    <div className="view-user-container">
        <table>
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Department</th>
                    <th>Streak</th>
                    <th>CreatedOn</th>
                </tr>
            </thead>
            <tbody>
                {user && <tr>
                    <td>{user.fullName}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.department}</td>
                    <td>{user.usageStreak}</td>
                    <td>{user.createdAt}</td>
                    </tr>}
            </tbody>
        </table>
    </div>
  )
}

export default Viewuser;
