import React from 'react'

function Button({value,className,onClick}) {
  return <button onClick={onClick} className={className} >{value}</button>;
}

export default Button