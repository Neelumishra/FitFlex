import React from 'react'

const Button = ({onclick, value, className}) => {
  return (
    <div>
      <button onClick={onclick} className={className}>{value}</button>
    </div>
  )
}

export default Button
