import axios from "axios";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

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
            axios.post("http://localhost:9002/register", user).then(res => {
                alert(res.data.message)
                navigate("/login")
            })
            
        }
        else
        {
            alert("Invalid Input")
        }
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Enter your Name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your PassWord" onChange={handleChange}></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-Enter your PassWord" onChange={handleChange}></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={()=>navigate("/login")} >Login</div>
        </div>
    );
};

export default Register
