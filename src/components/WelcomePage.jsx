import React from 'react'
import { useNavigate } from 'react-router-dom'

const WelcomePage = () => {
    const navigate = useNavigate()
  return (
    <div className='container m-2'>
        <div className="d-flex landing flex-column flex-wrap  align-items-center justify-content-center text-light bg-success p-3">
            <h2>Welcome To Cookziee!!!</h2>
            <p>New user?<strong>Register</strong></p>
            <p>Already Registered?<strong>Login</strong></p>
            <div className="d-flex flex-row ">
                <button className='btn text-success btn-outline-success bg-light m-2' onClick={()=>navigate('/register')}>Register</button>
                <button className='btn text-success btn-outline-success bg-light m-2' onClick={()=>navigate('/login')}>Login</button>
            </div>
            
        </div>

    </div>
  )
}

export default WelcomePage