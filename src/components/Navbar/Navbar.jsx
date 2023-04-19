import React from 'react'
import {Link} from "react-router-dom"
import style from "./Navbar.module.css"
import Button from '../atom/Button'
const Navbar = () => {
  return (
    
      <nav className={style.navContainer} >
       <div className={style.logo}> 
       <Link to={"/home"}>
       <h3>GYM</h3>
       </Link> </div>
        <ul >
            {/* <li>
                <Link to ={"/home"}>Home</Link>
            </li> */}
            <li className={style.navOptions} >
                <Link to={"/AboutUs"}>About Us</Link>
            </li >
            <li className={style.navOptions}><Link to={"/classes"}>Classes</Link>
            </li>
            <li className={style.navOptions}><Link to={"/blog"}>Blog</Link>
            </li>
        </ul>
       <Link to={"/register"}>
       <Button value="Join Us" className={style.joinBtn}/>
       </Link>
         
       
      </nav>
    
  )
}

export default Navbar
