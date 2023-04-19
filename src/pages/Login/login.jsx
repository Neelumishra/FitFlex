import React, { useState } from "react";
import logincss from "./Login.module.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const[loginemail,setemail]=useState("");
  const [loginpassword, setpassword] = useState("");
  const [error, seterror] = useState(true);


  let Registration = useNavigate();


  function handleClick() {
    Registration("/registration");
  }



  function handleLogin(){
    let holder = JSON.parse(localStorage.getItem("Details"));

    holder.map((e) =>{

    if((e.email!==""&&e.password!=="")&&(e.email==loginemail&&e.password==loginpassword)){
      console.log("valid user")
       Registration("/");
    }else{
      if (e.email == loginemail && e.password == loginpassword)
        seterror(!error);
    }
    }

    );
  }
  
  return (
    <form className={logincss.container}>
      <div class="form-group">
        <label className={logincss.Labelemail} for="exampleInputEmail1">
          Email address
        </label>
        <input
          required
          type="email"
          onChange={(e) => setemail(e.target.value)}
          className={logincss.email}
          id="exampleInputEmail1"
          placeholder="Enter email"
        />
        <br />

        <label className={logincss.Labelpassword} for="exampleInputPassword1">
          Password
        </label>
        <input
          required
          onChange={(e) => setpassword(e.target.value)}
          className={logincss.password}
          type="password"
          id="exampleInputPassword1"
          placeholder="Password"
        />
        <div>
          <button
            onClick={handleLogin}
            type="submit"
            class="btn btn-outline-light m-2"
          >
            Login
          </button>
          <button
            onClick={handleClick}
            type="submit"
            class="btn btn-outline-light m-2"
          >
            Register
          </button>
        </div>
        <p className={logincss.error}>
          {error ? null : "Invalid Username and Password"}
        </p>
      </div>
    </form>
  );
}

export default Login;
