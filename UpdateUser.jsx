import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function UpdateUser() {
  const {id} = useParams()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [address, setAddress] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3001/getUser/'+id)
    .then(result => {console.log(result)
     setName(result.data.name)
     setEmail(result.data.email)
     setAddress(result.data.address)
     setPassword(result.data.password) 
    })
    .catch(err => console.log(err))
   }, [])
   
   const Update = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3001/updateUser/"+id, {name, email, address, password})
    .then(result => {
    console.log(result)
    navigate('/')
    })

    .catch(err => console.log(err))
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
      <form onSubmit={Update}>
       <h2>Update User</h2>
        <div className='mb-2'>
          <label htmlFor="">Name</label>
          <input type="text" placeholder='Enter Name' className='form-control'
            value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className='mb-2'>
          <label htmlFor="">Email</label>
          <input type="text" placeholder='Enter Email' className='form-control'
             value={email} onChange={(e) => setFinisher(e.target.value)}/>
        </div>
        <div className='mb-2'>
          <label htmlFor="">Address</label>
          <input type="text" placeholder='Enter Address' className='form-control'
             value={address} onChange={(e) => setBrand(e.target.value)}/>
        </div>
        <div className='mb-2'>
          <label htmlFor="">Password</label>
          <input type="text" placeholder='Enter Password' className='form-control'
           value={password} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <button className='btn btn-success'>Submit</button>
      </form>
    </div>
   </div>  )
}

export default UpdateUser