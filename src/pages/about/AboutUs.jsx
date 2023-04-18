import React from 'react'
import {Link} from "react-router-dom"
import style from "./aboutSection.module.css"
const AboutSection = () => {
  return (
    <div>
      <div className={style.topContainer}>
        <iframe src='https://youtu.be/w9w50DqXU5o' width="400" height="300"></iframe>
        <div className={style.textSection}>
          <h1 className={style.aboutHeading}>About Us</h1>
        <p>Golds Gym is a fitness hub for anyone who wants to know their bodies inside out and how to work with them. The gym boasts cardio and weights stations, swimming pools, valet parking, squash courts, physiotherapists, spinning studios and a massage center. The gym also has its own fitness academy where it offers courses in fitness management, personal training and group exercise instruction.</p>
        <Link to={"/AboutUs"}>
        <button>Learn More</button>
        </Link>
       
        </div>
      </div>
    </div>
  )
}

export default AboutSection
