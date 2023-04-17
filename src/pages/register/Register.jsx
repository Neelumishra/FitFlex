import React from 'react'
import { Link } from 'react-router-dom'
import style from "./register.module.css"


const Register = () => {
  return (
    <div className={style.registerContainer}>
      <h1>Registration page</h1>
      <input type="text" placeholder='enter First Name'/>
      <input type="text" placeholder='enter Last Name'/>
      <input type="email" placeholder='enter Email Id'/>
      <input type="password" placeholder='create your password'/>
      <input type="password" placeholder='confirm password'/>
      <button><Link to={"/"}>Submit</Link></button>

      <p>already have an account 
        <Link to={"/"}>Login here</Link>
      </p>

    </div>
  )
}

export default Register
