import React from 'react'
import { Link } from "react-router-dom"
import style from "./aboutSection.module.css"
import Navbar from '../../components/Navbar/Navbar'
import MoreAboutUs from './MoreAboutUs'
const AboutSection = () => {
  return (
    <div >
      <Navbar />
      <div className={style.aboutPageContainer}>
      <div className={style.topContainer}>
        {/* <iframe src='https://youtu.be/_WnNH7uU8qQ' width="400" height="300"></iframe> */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/X_9VoqR5ojM"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div className={style.textSection}>
          <h1 className={style.aboutHeading}>About Us</h1>
          <p>Golds Gym is a fitness hub for anyone who wants to know their bodies inside out and how to work with them. The gym boasts cardio and weights stations, swimming pools, valet parking, squash courts, physiotherapists, spinning studios and a massage center. The gym also has its own fitness academy where it offers courses in fitness management, personal training and group exercise instruction.</p>
          <Link to={"/AboutUs"}>
            <button>Learn More</button>
          </Link>

        </div>
      </div>
      <div className={style.bottomContainer}>
        
        <div className={style.textSection}>
        <h1>Why Choose Us?</h1>
        <p>Golds Gym is a fitness hub for anyone who wants to know their bodies inside out and how to work with them. The gym boasts cardio and weights stations, swimming pools, valet parking, squash courts, physiotherapists, spinning studios and a massage center. The gym also has its own fitness academy where it offers courses in fitness management, personal training and group exercise instruction.</p>

        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/X_9VoqR5ojM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </div>
     
      <hr/>
      <MoreAboutUs/>
      <hr/>
    </div>
  )
}

export default AboutSection
