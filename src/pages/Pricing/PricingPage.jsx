import React from 'react';
import {useNavigate} from 'react-router-dom'

import style from './Pricing.module.css'

export default function PricingPage() {
  const navigate = useNavigate()
  return (
    <>
    
    <section className={style.container}>
    <div className={style.cardcontainer}>
      <div className={style.carddiv}>
        <h1 className={style.cardh1}><i> Day Pass</i></h1>
        <h1 className={style.priceh1}><span className={style.price}>
         <span className={style.dollar}>$</span>
         <span className={style.number}>14<span className={style.slash}>/pass</span></span>
        </span>
         </h1>
        <ul className={style.mylistcard} >
        <li>1 Day Pass</li>
        <li>Free Gym Access</li>
        <li>24 Access</li>
        
         </ul>
        
        <button className={style.btn}   onClick={()=>navigate("/login")}>Get started</button>
      </div>
      {/* 2 card  */}
      <div className={style.carddiv}>
        <h1 className={style.cardh1}><i>Month to Month</i></h1>
        <h1 className={style.priceh2}><span class={style.price}>
         <span class={style.dollar}>$</span>
         <span class={style.number}>90<span className={style.slash}>/month</span></span>
        </span>
         </h1>

        <ul className={style.mylistcard} >
        <li>$99 Joining Fee</li>
        <li>No Contract</li>
        <li>1 Group Class Included</li>
        <li>24 Hour Access</li>
        </ul>
        
        <button className={style.btn} onClick={()=>navigate("/login")}>Get started</button>
      </div>
      <div className={style.textdiv}>
        <p className={style.textheading}>Membarship</p>
        <div className={style.linebar}></div>
        <h1>From Push Pass to Monthly or Annual</h1>
        <p>At Gym Base.We offer a wide range of membership with option to suit every budget.Everything from One Day Pass.Punch Pass to monthly or annual prepaid memberships What's more.We won't tie you in to a long term contract,giving you greter flexibility. </p>
        <div className={style.listcard}>
        <h1>Each plane Included</h1>
        <div className={style.textlist}>
          <p>The best equipment global brands</p>
          <p>The gym is open 24 hours a day,7 days a week</p>
          <p>Two safe payment methods</p>
          <p>Group fitness classes in the price of the subscription</p>
          <p>No long-term contract,period.</p>
        </div>

        </div>
      </div>
    </div>


    </section>
  </>
  )
}

