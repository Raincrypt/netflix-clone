import React from 'react'

const Button = ({label, onClick}) => {
  return (
    <button onClick={onClick} className={`text-white bg-red-600 px-6 py-3 rounded cursor-pointer text-center`}>{label}</button>
  )
}

export default Button