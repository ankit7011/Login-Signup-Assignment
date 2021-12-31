import axios from "axios";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import {Alert,AlertTitle} from "@mui/material";

import LoginIcon from "@mui/icons-material/Login";
import FitbitIcon from "@mui/icons-material/Fitbit";
import ani from "./ani.jpg";

const Register = () => {

    const navigate=useNavigate()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    } )


    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        
        if (name && email && password && (password===reEnterPassword))
        {
            axios
              .post("https://log2.herokuapp.com/register", user)
              .then((res) => {
                alert(res.data.message);
                navigate("/login");
              });
            
        }
        else
        {
            alert("Invalid Input")
        }
    }

    return (
      <div className="main">
        <div className="leftside">
          <div className="ficon">
            <FitbitIcon />
          </div>
          <div className="lbm">Hi, Be Motivated...</div>
          <div className="leftimg">
            <img className="imani" src={ani} />
          </div>
        </div>
        <div className="login">
          <div className="lc">
            <LoginIcon /> Register
          </div>
          <input
            className="pw"
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Enter your Name"
          ></input>
          <span className="focus-border"></span>
          <input
            className="em"
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter your Email"
          ></input>
          <span className="focus-border"></span>
          <input
            className="pw"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter your PassWord"
          ></input>
          <span className="focus-border"></span>

          <input
            className="pw"
            type="password"
            name="reEnterPassword"
            value={user.reEnterPassword}
            onChange={handleChange}
            placeholder="Re-Enter your PassWord"
          ></input>
          <span className="focus-border"></span>
          <div className="button" onClick={register}>
            Register
          </div>
          <div>or</div>
          <div className="button" onClick={() => navigate("/login")}>
            Login
          </div>
        </div>
      </div>
    );
    };
    
    export default Register
    
    {/* <div className="main_r" >
        <div className="register">
            <h1>Register</h1>
            <input className="em" type="text" name="name" value={user.name} placeholder="Enter your Name" onChange={handleChange}></input>
            <span className="focus-border"></span>
            
            <input className="em" type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
            <span className="focus-border"></span>
            
            <input className="em" type="password" name="password" value={user.password} placeholder="Enter your PassWord" onChange={handleChange}></input>
            <span className="focus-border"></span>
            <input className="em" type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-Enter your PassWord" onChange={handleChange}></input>
            <span className="focus-border"></span>
            
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={()=>navigate("/login")} >Login</div>
        </div>
        
    </div> */}