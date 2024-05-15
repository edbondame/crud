import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function CreateUser() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [address, setAddress] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/createUser", {name, email, address, password})
    .then(result => {
    console.log(result)
    navigate('/')
    })

    .catch(err => console.log(err))
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
     <div className='w-50 bg-white rounded p-3'>
       <form onSubmit={Submit}>
        <h2>Add User</h2>
         <div className='mb-2'>
           <label htmlFor="">Name</label>
           <input type="text" placeholder='Enter Name' className='form-control'
          onChange={(e) => setName(e.target.value)}/>
         </div>
         <div className='mb-2'>
           <label htmlFor="">Email</label>
           <input type="text" placeholder='Enter Email' className='form-control'
            onChange={(e) => setEmail(e.target.value)}/>
         </div>
         <div className='mb-2'>
           <label htmlFor="">Address</label>
           <input type="text" placeholder='Enter Address' className='form-control'
            onChange={(e) => setAddress(e.target.value)}/>
         </div>
         <div className='mb-2'>
           <label htmlFor="">Password</label>
           <input type="text" placeholder='Enter Password' className='form-control' 
           onChange={(e) => setPassword(e.target.value)}/>
         </div>
         <button className='btn btn-success'>Submit</button>
       </form>
     </div>
    </div>
  )
}

export default CreateUser