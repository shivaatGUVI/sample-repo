import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UrlContext from '../useContext/UrlContext';

const MyRecipesCard = ({name,ingredients,img,steps,cookingTips,cuisine,id,type}) => {
 const url = useContext(UrlContext)
  const [edit,setEdit] = useState(false)
  const [newname,setNewname] = useState(name)
  const [newing,setNewIng] = useState(ingredients)
  const [newimg,setNewImg] = useState(img)
  const [newsteps,setNewSteps] = useState(steps)
  const [newtips,setNewTips] = useState(cookingTips)
  const [newcuisine,setNewcuisine] = useState(cuisine)
  const [newtype,setNewType]=useState(type)
  const navigate = useNavigate()
  const handleRecipeDelete = ()=>{
    axios.delete(`${url.baseUrl}/recipe/${id}`,{headers: {
      'Content-Type' : 'application/json'
   },
   withCredentials : true} )
  .then(res => console.log("successfully deleted!!!",res))
  .catch(err => console.error(err));
  navigate('/')
  }
  const handleRecipeEdit = ()=>{
    console.log("edit")
    const UpdatedData = {
      name : newname,
      ingredients : newing,
      img : newimg,
      steps:newsteps,
      cookingTips:newtips,
      cuisine :newcuisine,
      type :newtype

    }
        axios.put(`${url.baseUrl}/recipe/${id}`,UpdatedData,{headers: {
          'Content-Type' : 'application/json'
      },
      // withCredentials : true
    } )
      .then(res => console.log("successfully updated!!!",res))
      .catch(err => console.error(err));
      navigate('/home')
    
  }
  return (
    <>
        <div className="card mt-4" style={{width: "20rem"}}>
        <img src={img} className="card-img-top" alt="RecipeImage" height="200px"/>
        <div className="card-body cardBackground mp">
            {edit?<input type="text" value={newname} onChange={(e)=>setNewname(e.target.value)} />:<h2 className="card-title">{name}</h2>}
            {edit?<br/>:""}
            <strong>Ingredients : </strong>
            {edit?<input type="text" value={newing} onChange={(e)=>setNewIng(e.target.value)} />:<p className="card-text">{ingredients}</p>}
            {edit?<br/>:""}
            <strong>Steps : </strong>
            {edit?<br/>:""}
            {edit?<textarea type="text" value={newsteps} onChange={(e)=>setNewSteps(e.target.value)}></textarea>:<p className="card-text">{steps}</p>}
            {edit?<br/>:""}
            <strong>Cooking Tips :</strong> {edit?<input type="text" value={newtips} onChange={(e)=>setNewTips(e.target.value)} />:<p>{cookingTips}</p>}
            {edit?<br/>:""}
            <strong>Cuisine : </strong>
            {edit?<input type="text" value={newcuisine} onChange={(e)=>setNewcuisine(e.target.value)} />:<p>{cuisine}</p>}
            {edit?<br/>:""}
            <strong>Type :</strong> {edit?<input type="text" value={newtype} onChange={(e)=>setNewType(e.target.value)} />:<p>{type}</p>}
            <div>
              <button className='border bg-warning text-light me-3' onClick={()=>{
                setEdit(!edit)
                if(edit){
                  handleRecipeEdit()
                }
                }
                }>{edit?<i className="fa-solid fa-check"></i>:<i className="fa-solid fa-pen "></i>}</button>
              <button className='border bg-danger text-light' onClick={()=>handleRecipeDelete()}><i className="fa-solid fa-trash"></i></button>
            </div>
            
        </div>
        </div>
    
    </>
  )
}

export default MyRecipesCard