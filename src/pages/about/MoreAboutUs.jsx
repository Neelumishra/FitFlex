import React, { useRef } from 'react'
import style from "./aboutPageCss/moreAboutUs.module.css"

const MoreAboutUs = () => {
  return (
    <div className={style.moreInfoContainer} >
      <h1>More About Us</h1>
      <hr />

      <div className={style.moreAboutUs}>
        <img src='https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fA%3D%3D&w=1000&q=80' />
        <p>OZONE was conceptualized keeping in mind the rationale behind multi specialty centre concept. At Ozone we integrate all the possible relaxation, exercises and group exercise techniques, i,e.,“gym, spa, yoga, aerobics” centers.are all under a single roof. <br />
          Ozone Clubs are the luxury health clubs and salons launched to satisfy the niche segment by revitalizing their senses and soothe the jitteriness of city life.<br />
          Ozone Spa Pvt. Ltd., incorporated on November 1, 2002 is the country's first largest chain of premier boutique health, fitness and spa.<br />
          O3 in the company logo symbolizes “strong protection of the human race”.<br />
          Ozone is the first chain of health clubs to be awarded the ISO-9001-2000 and ISO-14001 certificates.<br />
          Headed by S. K. Kandhari as the chairman, Ozone has already received the Indira Gandhi Priyadarshini Award for the best chain of Eco-friendly health clubs in India.
        </p>
      </div>
    </div>

  )
}

export default MoreAboutUs
