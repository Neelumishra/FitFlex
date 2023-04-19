import React from 'react'

const Button = ({onclick, value, className}) => {
  return (
    
      <button onClick={onclick} className={className}>{value}</button>
   
  )
}

export default Button
