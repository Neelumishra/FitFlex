import React from "react";
import style from "./registration.module.css";
import { useNavigate } from "react-router-dom";

function Registration() {
  let user = useNavigate();

  function handleRegistration() {
    user("/");
  }

  function handleForm(e) {
    e.preventDefault();
    let details = {
      name: e.target[0].value,
      mobileNo: e.target[1].value,
      email: e.target[2].value,
      password: e.target[3].value,
    };

    let holder = JSON.parse(localStorage.getItem("Details"))||[];
    holder.push(details);
    localStorage.setItem("Details", JSON.stringify(holder));
    user("/login")
  }
  return (
    <form onSubmit={handleForm} className={style.registerContainer}>
      <div>
        <label className={style.Namelabel} for="exampleInputName">
          Full Name
        </label>
        <input
          className={style.Name}
          id="exampleInputName"
          type="text"
          placeholder="Enter Full Name"
        />
      </div>
      <div>
        <label className={style.mobilelabel} for="exampleInputMobile">
          Mobile No
        </label>
        <input
          type="password"
          className={style.mobile}
          id="exampleInputMobile"
          placeholder="Enter Mobile Number"
        />
      </div>
      <div>
        <label className={style.emailLabel} for="exampleInputEmail1">
          Email address
        </label>
        <input type="email" className={style.email} placeholder="Enter email" />
      </div>
      <div class="form-group">
        <label className={style.passwordlabel} for="exampleInputPassword1">
          Password
        </label>
        <input
          type="password"
          className={style.password}
          placeholder="Enter Password"
        />
      </div>
      <div className={style.buttoncss}>
        <button onClick={handleRegistration} class="btn btn-outline-light m-3">
          Back to Login
        </button>
        <button type="submit" class="btn btn-outline-light my-3">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Registration;
