import axios from "axios";
import React,{useState} from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import FitbitIcon from "@mui/icons-material/Fitbit";
import ani from "./ani.jpg"
const Login = ({ setLoginUser } ) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const login = () => {
    axios.post("https://log2.herokuapp.com//login", user).then((res) => {
      // alert(res.data.message);
      setLoginUser(res.data.user);
      navigate("/");
    });
  };

  return (
    <div className="main">
      <div className="leftside">
        <div className="ficon">
          <FitbitIcon />
        </div>
        <div className="lbm">Hi, Be Motivated...</div>
        <div className="leftimg">
          <img className="imani" src={ani}/ >
        </div>
      </div>
      <div className="login">
        <div className="lc">
          <LoginIcon /> Login
        </div>
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
        <div className="button" onClick={login}>
          Login
        </div>
        <div>or</div>
        <div className="button" onClick={() => navigate("/register")}>
          Register
        </div>
      </div>
    </div>
  );
};

export default Login
