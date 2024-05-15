import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
     axios.get('http://localhost:3001')
     .then(result => setUsers(result.data))
     .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
      axios.delete('http://localhost:3001/deleteUser/'+id)
      .then(res => {console.log(res)
        window.location.reload()})
      .catch(err => console.log(err))
    }

  return (
    <div className="d-flex vh-5 bg-primary justify-content-center align-items-center">
        <div className='w-auto bg-white rounded p-3'>
        <div>
          <h2>User Management </h2>
        </div>
        <Link to="/create" className='btn btn-success'>Add +</Link>
        
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                  users.map((user) => {
                    return <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>
                        <td>{user.password}</td>
                        <td>
                        <Link to={`/update/${user._id}`} className='btn btn-success'>@</Link>&nbsp;
                        <button className='btn btn-danger' 
                        onClick={(e) => handleDelete(user._id)}>__</button>
                        </td>
                        </tr>
                  })
                }
            </tbody>
        </table>
        </div>      
    </div>
  )
}

export default Users