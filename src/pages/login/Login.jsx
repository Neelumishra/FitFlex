import React from 'react'
import { Link } from 'react-router-dom'
import style from "./login.module.css"
// const navigate = useNavigate()



const Login = () => {
  return (
    <div className={style.loginContainer}>
        <h1>Login Page</h1>
        <input type='email' placeholder='Enter your Email Id'/>
        <input type='password' placeholder='Enter your password'/>
        <p>new user <Link to={"/register"}>Register here</Link></p>
        <button><Link to={"/home"}>Login</Link></button>

    </div>
  )
}

export default Login
