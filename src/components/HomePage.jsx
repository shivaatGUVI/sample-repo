import React, { useContext, useEffect, useState } from "react";
import NavBar from "../NavBar";
import RecipeCard from "./RecipeCard";
import axios from "axios";
import UrlContext from "../useContext/UrlContext";

const HomePage = () => {
  const url = useContext(UrlContext)
  const [data,setData] = useState([])
  const [search,setSearch] = useState("")
  const config = {
    headers: {
        'Content-Type' : 'application/json'
     },
    //  withCredentials : true
  };
 useEffect(()=>{
    axios.get(`${url.baseUrl}/allRecipes`,config )
    .then(res => setData(res.data.recipe))
    .catch(err => console.error(err));
 },[])
  return (
    <>
      <NavBar />
      <div className="container-fluid" style={{width : "50%",padding:"2%"}}>
                <form className="d-flex">
                <input className="form-control me-2" type="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search by Recipe Name" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
      </div>
      <div className="container d-flex flex-wrap gap-5 mb-3 ">
        {
        data.filter(e =>e.name.toLowerCase().includes(search.toLowerCase())).map((e,i)=> {
          return (
            <RecipeCard key={i} name={e.name}  ingredients={e.ingredients} img={e.img} steps={e.steps} cookingTips={e.cookingTips} cuisine={e.cuisine} type={e.type} rating={e.rating} comments={e.comments} id={e._id} />
          )
        })}
      </div>
    </>
  );
};

export default HomePage;
