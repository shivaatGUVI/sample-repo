import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UrlContext from '../useContext/UrlContext'

const DeleteProfile = () => {
    const url =  useContext(UrlContext)
    const navigate =  useNavigate()
    const handleDelete = ()=>{
            axios.delete(`${url.baseUrl}/profile`,{headers: {
                'Content-Type' : 'application/json'
             },
            //  withCredentials : true
            } )
            .then(res => console.log(res))
            .catch(err => console.error(err));
        navigate('/')
    }
  return (
    <>
    
        <div className='container m-2'>
        <div className="d-flex landing flex-column flex-wrap  align-items-center justify-content-center text-light bg-success p-3">
        <div className="input-group mb-1">
        <h6>
            Are you sure to delete your account?<br/>
            <small>By deleting your account,all your recipes will be removed permanently</small>
        </h6>
        </div>
            <div className="d-flex flex-row ">
                <button className='btn text-success btn-outline-success bg-light m-2' onClick={()=>handleDelete()}>Delete</button>
                <button className='btn text-success btn-outline-success bg-light m-2' onClick={()=>navigate(-1)}>Cancel</button>
            </div>
        </div>

    </div>
    </>
  )
}

export default DeleteProfile