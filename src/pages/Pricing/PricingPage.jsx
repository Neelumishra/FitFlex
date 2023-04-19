import React from 'react'

import "./Pricing.css"

export default function PricingPage() {
  return (
    <>
    
    <section className='container'>
    <div className='card-container'>
      <div className='carddiv'>
        <h1 className='cardh1'><i> Day Pass</i></h1>
        <h1 className='priceh1'><span class="price">
         <span class="dollar">$</span>
         <span class="number">14<span className='slash'>/pass</span></span>
        </span>
         </h1>
        <ul className='my-listcard' >
        <li>1 Day Pass</li>
        <li>Free Gym Access</li>
        <li>24 Access</li>
        
         </ul>
        
        <div ><button className='btn'>Get started</button></div>
      </div>
      {/* 2 card  */}
      <div className='carddiv'>
        <h1 className='cardh1'><i>Month to Month</i></h1>
        <h1 className='priceh2'><span class="price">
         <span class="dollar">$</span>
         <span class="number">90<span className='slash'>/month</span></span>
        </span>
         </h1>

        <ul className='my-listcard' >
        <li>$99 Joining Fee</li>
        <li>No Contract</li>
        <li>1 Group Class Included</li>
        <li>24 Hour Access</li>
        </ul>
        
        <div ><button className='btn'>Get started</button></div>
      </div>
      <div className='textdiv'>
        <p className='textheading'>Membarship</p>
        <div className='linebar'></div>
        <h1>From Push Pass to Monthly or Annual</h1>
        <p>At Gym Base.We offer a wide range of membership with option to suit every budget.Everything from One Day Pass.Punch Pass to monthly or annual prepaid memberships What's more.We won't tie you in to a long term contract,giving you greter flexibility. </p>
        <div className='listcard'>
        <h1>Each plane Included</h1>
        <div className='textlist'>
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

