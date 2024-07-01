import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import { useFormik } from 'formik'
import UrlContext from '../useContext/UrlContext'

const Register = () => {
    const url = useContext(UrlContext)
    const navigate = useNavigate()
    const formValidationFormik = yup.object({
        username : yup.string().min(3,"Atleast 3 characters").max(12,"Maximum 12 characters allowed").required(),
        email : yup.string().min(10,"Atleast 10 characters").max(25,"Maximum 25 characters allowed").required(),
        password : yup.string().required().min(8,"Need strong password").max(14,"Too long"),
        bio:yup.string(),
        location:yup.string().min(2,"Atleast 2 characters").max(15,"Maximum 15 characters allowed").required()
    })
    const formik = useFormik({
        initialValues : {
            username : "",
            email : "",
            password : "",
            bio:"",
            location:""
        },
        validationSchema : formValidationFormik,
        onSubmit :(values,{resetForm}) =>{
            axios.post(`${url.baseUrl}/register`,values).then(res=>console.log("Registered Successfully!!"))
            navigate('/login')
            resetForm()
        }
    })

  return (
    <>
        <form onSubmit={formik.handleSubmit}>
        <div className='container m-2'>
        <div className="d-flex landing flex-column flex-wrap  align-items-center justify-content-center text-light bg-success p-3">
        <div className="input-group mb-2">
        <span className="input-group-text text-success" id="username">Username</span>
        <input type="text" className="form-control" name="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleChange} placeholder="Enter username" aria-label="Username" aria-describedby="username" />
        {formik.errors.username} <br/>
        </div>
        <div className="input-group mb-2">
        <span className="input-group-text text-success" id="email">Email</span>
        <input type="email" className="form-control" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleChange}  placeholder="Enter your email" aria-label="Email" aria-describedby="email" />
        {formik.errors.email} <br/>
        </div>
        <div className="input-group mb-2">
        <span className="input-group-text text-success" id="password">Password</span>
        <input type="password" className="form-control" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleChange}  placeholder="Enter password" aria-label="Password" aria-describedby="password" />
        {formik.errors.password} <br/>
        </div>
        <div className="input-group mb-2">
        <span className="input-group-text text-success">Bio</span>
        <textarea className="form-control" name="bio" value={formik.values.bio} onChange={formik.handleChange} onBlur={formik.handleChange}  aria-label="Bio"></textarea>
        {formik.errors.bio} <br/>
        </div>
        <div className="input-group mb-2">
        <span className="input-group-text text-success" id="location">Location</span>
        <input type="text" className="form-control" name="location" value={formik.values.location} onChange={formik.handleChange} onBlur={formik.handleChange}  placeholder="Enter location" aria-label="Location" aria-describedby="location" />
        {formik.errors.location} <br/>
        </div>
        <div className="d-flex flex-row">
        {/* <button className='btn text-success btn-outline-success bg-light m-1' onClick={()=>handleRegister()}>Submit</button> */}
        <input className='btn text-success btn-outline-success bg-light m-1' type="submit" value="Submit" />
        <button className='btn text-success btn-outline-success bg-light m-1' onClick={()=>navigate(-1)}>Cancel</button>
        </div>                   
        </div>
        </div>
        </form>
    </>
  )
}

export default Register

