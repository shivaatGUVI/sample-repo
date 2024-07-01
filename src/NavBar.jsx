import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
    // const {setToken} = useContext(tokenContext)
    const handleLogout = ()=>{
        // setToken('')
        navigate('/logout')

    }
  return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <Link className="navbar-brand text-success" to='/home'>Cookziee</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to='/createrecipe'>Add Recipe</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to='/myrecipes'>My Recipes</Link>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                My Profile
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to='/profile'>View Profile</Link></li>
                <li><Link className="dropdown-item" to='/updateprofile'>Edit Profile</Link></li>
                <li><Link className="dropdown-item" to='/deleteProfile'>Delete Account</Link></li>
            </ul>
            </li>
        </ul>
        <form className="d-flex">
            <button className="btn btn-outline-success" type="submit" onClick={()=>handleLogout()}>Logout</button>
        </form>
        </div>
    </div>
    </nav>
    </>
  )
}

export default NavBar