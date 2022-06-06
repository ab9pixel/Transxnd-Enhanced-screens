import React from 'react'
import styles from './CustomButton.module.css'
const CustomButton = ({text, style}) => {
  return (
    <div className={styles.CustomButtonMain}>
      <button style={style}>{text}</button>
    </div>
  )
}

export default CustomButton