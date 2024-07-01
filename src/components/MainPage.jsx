import React from "react";
import WelcomePage from "./WelcomePage";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import HomePage from "./HomePage";
import MyRecipes from "./MyRecipes";
import ViewProfile from "./ViewProfile";
import EditProfile from "./EditProfile";
import DeleteProfile from "./DeleteProfile";
import Logout from "./Logout";
import AddRecipes from "./AddRecipes";

const MainPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}>
          {" "}
        </Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/myrecipes" element={<MyRecipes />}></Route>
        <Route path="/profile" element={<ViewProfile />}></Route>
        <Route path="/updateprofile" element={<EditProfile />}></Route>
        <Route path="/deleteprofile" element={<DeleteProfile />}></Route>
        <Route path="/createrecipe" element={<AddRecipes />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </div>
  );
};

export default MainPage;
