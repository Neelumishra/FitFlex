import React from 'react'
import {Link} from "react-router-dom"
import style from "./Navbar.module.css"
import Button from '../atom/Button'
const Navbar = () => {
  return (
    <div className={style.navContainer}>
      {/* <nav > */}
        <ul >
            <li>
                <Link to ={"/home"}>Home</Link>
            </li>
            <li>
                <Link to={"/AboutUs"}>About Us</Link>
            </li>
            <li><Link to={"/classes"}>Classes</Link>
            </li>
            <li><Link to={"/blog"}>Blog</Link>
            </li>
        </ul>
       <Link to={"/"}>
       <Button value="Join Us" className={style.joinBtn}/>
       </Link>
         
       
      {/* </nav> */}
    </div>
  )
}

export default Navbar
