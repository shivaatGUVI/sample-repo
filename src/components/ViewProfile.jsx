import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavBar from '../NavBar'
import UrlContext from '../useContext/UrlContext'

const ViewProfile = () => {
  const url = useContext(UrlContext)
    const navigate = useNavigate()
    const [data,setData] = useState("")
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
  
  return (
    <>  
    <NavBar/>
    <div className='container m-2 '>
    <center><h4>Details</h4></center>
        <table className="table bg-success text-light border">
        <thead>
            <tr>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Bio</th>
            <th scope="col">Location</th>
            </tr>
        </thead>
        <tbody className='table-success'>
            <tr>
            <td>{data.username}</td>
            <td>{data.email}</td>
            <td>{data.bio}</td>
            <td>{data.location}</td>
            </tr>
        </tbody>
        </table>
        <center><button className='btn text-success btn-outline-success bg-light m-1' onClick={()=>navigate(-1)}>Back</button></center>
    </div>
    </>
  )
}

export default ViewProfile