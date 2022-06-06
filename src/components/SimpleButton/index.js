import React from 'react'
import './styles.scss'
const SimpleButton = ({style,text, onClick}) => {
  return (
    <div className='simple-button SimpleButton'>
        <button onClick={onClick} style={style}>{text}</button>
    </div>
  )
}

export default SimpleButton