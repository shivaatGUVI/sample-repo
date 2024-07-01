import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import NavBar from '../NavBar'
import axios from 'axios'
import UrlContext from '../useContext/UrlContext'


const AddRecipes = () => {
    const url = useContext(UrlContext)
    const navigate = useNavigate()
    const formValidationFormik = yup.object({
        name : yup.string().min(3,"Atleast 3 characters").max(15,"Maximum 15 characters allowed").required(),
        ingredients : yup.string().min(8,"Atleast 8 characters").required(),
        img : yup.string().required("paste the image url"),
        steps : yup.string().required().min(25,"Atleast 25 characters"),
        cookingTips : yup.string().required(),
        cuisine : yup.string().required(),
        type: yup.string().required()
        
    })
    const formik = useFormik({
        initialValues : {
            name : "",
            ingredients : "",
            img : "",
            steps:"",
            cookingTips:"",
            cuisine : "",
            type:""
        },
        validationSchema : formValidationFormik,
        onSubmit :(values,{resetForm}) =>{
            axios.post(`${url.baseUrl}/recipe`,values,{
                headers : {
                    "Content-Type" : 'application/json'
                },
                // withCredentials :true
            }).then(res=>console.log("Recipe added Successfully!!"))
            navigate('/home')
            resetForm()
        }
    })
  return (
    <>
        <NavBar/>
    <form onSubmit={formik.handleSubmit}>
        <div className='container m-2'>
        <div className="d-flex landing flex-column flex-wrap  align-items-center justify-content-center text-light bg-success p-3">
        <div className="input-group mb-2">
        <span className="input-group-text text-success" id="name">Recipe Name</span>
        <input type="text" className="form-control" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleChange}  aria-label="name" aria-describedby="name" />
        {formik.errors.name} <br/>
        </div>
        <div className="input-group mb-2">
        <span className="input-group-text text-success" id="ingredients">Ingredients</span>
        <input type="text" className="form-control" name="ingredients" value={formik.values.ingredients} onChange={formik.handleChange} onBlur={formik.handleChange}   aria-label="ingredients" aria-describedby="ingredients" />
        {formik.errors.ingredients} <br/>
        </div>
        <div className="input-group mb-2">
        <span className="input-group-text text-success" id="img">Image URL</span>
        <input type="text" className="form-control" name="img" value={formik.values.img} onChange={formik.handleChange} onBlur={formik.handleChange} aria-label="img" aria-describedby="img" />
        {formik.errors.img} <br/>
        </div>
        <div className="input-group mb-2">
        <span className="input-group-text text-success" id="steps">Steps</span>
        <textarea className="form-control" name="steps" value={formik.values.steps} onChange={formik.handleChange} onBlur={formik.handleChange} aria-label="steps" aria-describedby="steps"></textarea>
        {formik.errors.steps} <br/>
        </div>
        <div className="input-group mb-2">
        <span className="input-group-text text-success" id="cookingTips">Cooking Tips</span>
        <input type="text" className="form-control" name="cookingTips" value={formik.values.cookingTips} onChange={formik.handleChange} onBlur={formik.handleChange} aria-label="cookingTips" aria-describedby="cookingTips" />
        {formik.errors.cookingTips} <br/>
        </div>
        <div className="input-group mb-2">
        <span className="input-group-text text-success" id="cuisine">cuisine</span>
        <input type="text" className="form-control" name="cuisine" value={formik.values.cuisine} onChange={formik.handleChange} onBlur={formik.handleChange} aria-label="cuisine" aria-describedby="cuisine" />
        {formik.errors.cuisine} <br/>
        </div>
        <div className="input-group mb-2">
        <span className="input-group-text text-success" id="type">type</span>
        <input type="text" className="form-control" name="type" value={formik.values.type} onChange={formik.handleChange} onBlur={formik.handleChange} aria-label="type" aria-describedby="type" />
        {formik.errors.type} <br/>
        </div>
        <div className="d-flex flex-row">
        <input className='btn text-success btn-outline-success bg-light m-1' type="submit" value="Submit" />
        <button className='btn text-success btn-outline-success bg-light m-1' onClick={()=>navigate(-1)}>Cancel</button>
        </div>                   
        </div>
        </div>
        </form>

    </>
  )
}

export default AddRecipes