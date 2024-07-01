import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../NavBar'
import axios from 'axios'
import UrlContext from '../useContext/UrlContext'

const EditProfile = () => {
  const url = useContext(UrlContext)
    const navigate = useNavigate()
    const [Data,setData] = useState({
      username:"",
      email:"",
      bio:"",
      location:""
    })
    const config = {
        headers: {
            'Content-Type' : 'application/json'
         },
        //  withCredentials : true
      };
     useEffect(()=>{
         axios.get(`${url.baseUrl}/profile`,config )
        .then(res => setData(res.data.user))
        .catch(err => console.error(err));
     },[])
      
      const handleChange = (e)=>{
        const {name,value} = e.target
        setData({...Data,[name] : value})
      }
      const handleUpdate = ()=>{
        const updatedData = {
          ...Data
        }
        // console.log(updatedData)
        axios.put('http://localhost:7000/api/users/profile',updatedData,{headers: {
          'Content-Type' : 'application/json'
      },
      withCredentials : true} )
      // .then(res => console.log("profile updated successfully!!!"))
      navigate('/home')
      }
  return (
    <>
    <NavBar/>
    
    <div className='container m-2'>
    <div className="d-flex landing flex-column flex-wrap  align-items-center justify-content-center text-light bg-success p-3">
    <div className="input-group mb-2">
    <span className="input-group-text text-success" id="username">Username</span>
    <input type="text" className="form-control" name="username" value={Data.username} onChange={(e)=>handleChange(e)} aria-label="Username" aria-describedby="username" />
    </div>
    <div className="input-group mb-2">
    <span className="input-group-text text-success" id="email">Email</span>
    <input type="email" className="form-control" name="email" value={Data.email} onChange={(e)=>handleChange(e)} aria-label="Email" aria-describedby="email" />
    </div>
    <div className="input-group mb-2">
    <span className="input-group-text text-success">Bio</span>
    <textarea className="form-control" name='bio' value={Data.bio} onChange={(e)=>handleChange(e)} aria-label="Bio"></textarea>
    </div>
    <div className="input-group mb-2">
    <span className="input-group-text text-success" id="location">Location</span>
    <input type="text" className="form-control" name="location" value={Data.location} onChange={(e)=>handleChange(e)} aria-label="Location" aria-describedby="location" />
    </div>
    <div className="d-flex flex-row">
    <button className='btn text-success btn-outline-success bg-light m-1' onClick={()=>handleUpdate()}>Update</button>
    <button className='btn text-success btn-outline-success bg-light m-1' onClick={()=>navigate(-1)}>Back</button>
    </div>                   
    </div>
    </div>
</>
  )
}

export default EditProfile