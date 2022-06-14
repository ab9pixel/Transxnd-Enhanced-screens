import React from 'react'
import './styles.scss'
const SimpleButton = ({style,text, onClick, className}) => {
  return (
        <button className= {`button ${className}`} onClick={onClick} style={style}>{text}</button>
  )
}

export default SimpleButton