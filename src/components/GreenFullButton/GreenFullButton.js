import React from 'react'
import styles from './GreenFullButton.module.css'
const GreenFullButton = ({currenctConvert, style, children}) => {
  return (
    <div className={styles.GreenFullButton} style={style}>
        <button onClick={currenctConvert}>{children}</button>
    </div>
  )
}

export default GreenFullButton