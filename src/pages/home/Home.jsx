import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import style from "./home.module.css"

const Home = () => {
  return (
    <div className={style.mainContainer}>
      <Navbar/>
     <div className={style.homeContainer}>
     
     <div className={style.homeText}>
       <h1>Take care of your <span>Body.</span></h1>
       <h1>It's the only place you have to <span>live.</span></h1>
     </div>

   </div>
  
    </div>
   
  )
}

export default Home
