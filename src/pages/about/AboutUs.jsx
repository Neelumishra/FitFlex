import React from 'react'
import { Link } from "react-router-dom"
import style from "./aboutPageCss/aboutSection.module.css"
import Navbar from '../../components/Navbar/Navbar'
import MoreAboutUs from './MoreAboutUs'
import Facilities from './Facilities'
import Footer from '../../components/Footer/Footer'
const AboutSection = () => {
  return (
    < >
      
      <div className={style.aboutPageContainer}>
        <div className={style.topContainer}>
          <iframe className={style.video} src="https://www.youtube.com/embed/X_9VoqR5ojM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <div className={style.topTextSection}>
            <h1 className={style.aboutHeading}>About Us</h1>
            <p>GYM is a fitness hub for anyone who wants to know their bodies inside out and how to work with them. The gym boasts cardio and weights stations, swimming pools, valet parking, squash courts, physiotherapists, spinning studios and a massage center. The gym also has its own fitness academy where it offers courses in fitness management, personal training and group exercise instruction.</p>
            <Link to={"/AboutUs"}>
              <button>Learn More</button>
            </Link>

          </div>
        </div>

        <div className={style.bottomContainer}>
          <div className={style.bottomTextSection}>
            <h1 className={style.aboutHeading}>Why Choose Us?</h1>
            <ul>
              <li>Consultation with experts</li>
              <li>Best Workout Facilities</li>
              <li>Personal and customized training and classes</li>
              <li>Professional and highly trained staff</li>
              <li>Supportive Community of Like-minded people</li>
            </ul>
          </div>
          <iframe className={style.video} src="https://www.youtube.com/embed/XP1Ne5mBn_A" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>

      <hr />

      <MoreAboutUs />
      <hr />
      <Facilities />
      
    </>
  )
}

export default AboutSection
