import React from 'react'
import './styles.scss'
const Navbar = (props) => {
  return (
    <div className="navWrap">
        {props.navName}
    </div>
  )
}

export default Navbar