import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UrlContext from '../useContext/UrlContext'

const Logout = () => {
  const url =useContext(UrlContext)
    const navigate = useNavigate()
    axios.get(`${url.baseUrl}/logout`,{
        headers : {
            "Content-Type" : 'application.json'
        },
        // withCredentials : true
    })
    useEffect(()=>{
        navigate('/')
    },[])
  return (
    <>
       
    </>
    
  )
}

export default Logout