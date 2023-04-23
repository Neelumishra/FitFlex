import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from "./register.module.css"

const Register = () => {
  const navigate = useNavigate()

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [errors, setErrors] = useState({})


  function submitUserDetails(event) {
    event.preventDefault();
    const errors = {}
    if (!fullName) {
      errors.fullName = " Full name is required";
    }
    if (!email) {
      errors.email = "email  is required"
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6|| password.indexOf('')!==-1) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm password is required';
    } else if (confirmPassword !== password) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setErrors(errors)

    let holder = JSON.parse(localStorage.getItem("Details"));
   if (holder) {

    } 
    else {
      holder = [];
    }
    if(Object.keys(errors).length===0){
      const checkDuplication = holder.some((user)=> user.email===email)
  
      if(checkDuplication){
        window.alert("email id already registered")
       
      }
     
      else{
       holder.push({
        name:fullName,
        email: email,
        password: password
      })
      console.log("details stored")
      localStorage.setItem("Details", JSON.stringify(holder));
      window.alert("Registered Successfully")
      navigate("/login")
      }
     }
  
}

  return (
    <div className={style.registerContainer}>

      <form onSubmit={submitUserDetails} className={style.regForm}>
        <h1>Registration page</h1>
        <input type="text"
          placeholder='enter Full Name'
          onChange={(e) => setFullName(e.target.value)}
        />
        {errors.fullName && <span>{errors.fullName}</span>}
        <input type="text"
          placeholder='enter Email Id'
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span>{errors.email}</span>}
        <input type="password"
          placeholder='create your password'
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span>{errors.password}</span>}
        <input type="password"
          placeholder='confirm password'
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        <button type="submit" className={style.regBtn}>
          Submit
        </button>
        <p>Already have an account?
          <Link to={"/login"}>Login here</Link>
        </p>
      </form>


    </div>
  )
}

export default Register
