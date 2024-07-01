import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";
import UrlContext from "../useContext/UrlContext";
import { TokenContext } from "../useContext/TokenContext";
const Login = () => {
  const url = useContext(UrlContext);
  const navigate = useNavigate();
  const { setToken } = useContext(TokenContext);

  const formValidationFormik = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: formValidationFormik,
    onSubmit: (values, { resetForm }) => {
      // console.log(values)
      axios
        .post(`${url.baseUrl}/login`, values, {
          headers: {
            "Content-Type": "application/json",
          },
          // withCredentials : true
        })
        .then((res) => {
          setToken(res.data.token);
          console.log(res.data.token);

          navigate("/home");
        });
      resetForm();
    },
  });
  return (
    <>
      {/* <NavBar/> */}
      <form onSubmit={formik.handleSubmit}>
        <div className="container m-2">
          <div className="d-flex landing flex-column flex-wrap  align-items-center justify-content-center text-light bg-success p-3">
            <div className="input-group mb-3">
              <span className="input-group-text text-success" id="username">
                Username
              </span>
              <input
                type="text"
                className="form-control"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleChange}
                placeholder="Enter username"
                aria-label="Username"
                aria-describedby="username"
              />
              {formik.errors.username} <br />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text text-success" id="pwd">
                Password
              </span>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleChange}
                placeholder="Enter password"
                aria-label="Password"
                aria-describedby="password"
              />
              {formik.errors.password} <br />
            </div>
            <div className="d-flex flex-row ">
              {/* <button className='btn text-success btn-outline-success bg-light m-2' onClick={()=>navigate('/home')}>Login</button> */}
              <input
                className="btn text-success btn-outline-success bg-light m-1"
                type="submit"
                value="Login"
              />
              <button
                className="btn text-success btn-outline-success bg-light m-2"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
