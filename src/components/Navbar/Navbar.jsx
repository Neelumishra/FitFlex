import React from 'react'
import {Link} from "react-router-dom"
import style from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={style.navContainer}>
      {/* <nav > */}
        <ul >
            <li>
                <Link to ={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/AboutUs"}>About Us</Link>
            </li>
            <li><Link to={"/classes"}>Classes</Link>
            </li>
            <li><Link to={"/blog"}>Blog</Link>
            </li>
        </ul>
      {/* </nav> */}
    </div>
  )
}

export default Navbar
