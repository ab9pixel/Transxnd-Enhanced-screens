import React from 'react'
import styles from './CustomButton.module.css'
const CustomButton = ({text, style, onClick}) => {
  return (
    <div className={styles.CustomButtonMain}>
      <button style={style} onClick={onClick}>{text}</button>
    </div>
  )
}

export default CustomButton