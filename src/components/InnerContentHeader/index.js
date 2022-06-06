import React from 'react'
import './styles.scss'
const InnerContentHeader = ({text}) => {
  return (
    <div className='inner-content-header'>
        <h3>{text}</h3>
    </div>
  )
}

export default InnerContentHeader