import React,{useState} from 'react'
import {Link} from "react-router-dom"
import style from "./Navbar.module.css"
import Button from '../atom/Button'
import {GiWeightLiftingUp} from "react-icons/gi"
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }
  return (
    
      <nav className={style.navContainer} >
       <div className={style.logo}> 
       <Link to={"/"}>
        <GiWeightLiftingUp size={50}/> 
        
       </Link> </div>
        <ul  className={`${style.navMenu} ${click ? style.active : ""}`}
        onClick={handleClick}>
           
            <li className={style.navOptions} >
                <Link to={"/AboutUs"}>About Us</Link>
            </li >
            <li className={style.navOptions}><Link to={"/classes"}>Classes</Link>
            </li>
            <li className={style.navOptions}><Link to={"/blog"}>Blog</Link>
            </li>
            <Link to={"/register"}>
       <Button value="Join Us" className={style.joinBtn}/>
       </Link>
        </ul>
       
       <div className={style.menuIcon} onClick={handleClick}>
        {click ? <IoClose /> : <FaBars />}
      </div>
         
       
      </nav>
    
  )
}

export default Navbar
