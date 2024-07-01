import axios from 'axios'
import React, { useContext, useState } from 'react'
import UrlContext from '../useContext/UrlContext'

const RecipeCard = ({name,ingredients,img,steps,cookingTips,cuisine,type,rating,comments,id}) => {
  const url = useContext(UrlContext)
  const [starCount,setStarCount] = useState(0)
  var person
  const [newComment,setNewComment] = useState("")
  const config = {
    headers: {
        'Content-Type' : 'application/json'
     },
    //  withCredentials : true
  };

      axios.get(`${url.baseUrl}/profile`,config )
      .then(res =>person =res.data.user.username)
      .catch(err => console.error(err));
  
  const handlePost = ()=>{
    const updatedData = {
    user:person,
    comment:newComment,
    ratings :starCount
    }
    console.log(updatedData)
      axios.put(`http://localhost:7000/api/users/review/${id}`,updatedData,config )
     .then(res => console.log("comment updated",res))
     .catch(err => console.error(err));
      setNewComment(" ")
  }
  // console.log(comments)
  // comments.map((e)=>console.log(e.user,e.comment))
  return (
    <>
        <div className="card mt-4 cardBackground " style={{width: "20rem",height:"670px"}}>
        <img src={img} className="card-img-top" alt="RecipeImage" height="180px"/>
        <div className="card-body">
            <div className="title d-flex flex-wrap">
            <h3 className="card-title text-success">{name}</h3>
            <h6 className='p-2 text-success'><i className="fa-brands fa-gratipay m-1"></i>{rating}</h6>
            </div>
            <p className="card-text tips "><strong className='text-success'>Ingredients : </strong>{ingredients}</p>
            <p className="card-text steps "><strong className='text-success'>Steps : </strong>{steps}</p>
            <p className='tips'><strong className='text-success'>Cooking Tips : </strong>{cookingTips}</p>
            <p className='oneline'><strong className='text-success'>Cuisine : </strong>{cuisine}</p>
            <p className='oneline'><strong className='text-success'>Type : </strong>{type}</p>
            <p className='oneline'><strong className='text-success '>Rate : </strong>
            {
              [...Array(5)].map((_,index)=>{
                return <span key={index}
                className='text-success'
                onClick={()=>{
                  setStarCount(index+1)
                }}
                ><i className={`${index+1<=starCount?"fa-solid fa-star":"fa-regular fa-star"}`}></i></span>
              })
             
            }
            </p>
            <p className='oneline'><strong className='text-success '>Comments : </strong></p>
            <div className="d-flex flex-wrap justify-content-between commentsection">
              <input type="text" name="comments" id="comments" value={newComment} onChange={(e)=>setNewComment(e.target.value)} placeholder='Add comment...' />
              <button className='btn btn-success' type='submit' onClick={()=>
                {
                  (newComment)?handlePost():alert("comment cannot be empty")

                }
              }>Post</button>
            </div>
            <p className='tips'>
              {/* {comments.map((e)=>{
                return <tr className="border"><td>{`${e}`} { console.log(e.comment)}</td></tr>
              })} */}
              
            </p>
        </div>
        </div>
    </>
  )
}

export default RecipeCard