import React from 'react'
import styles from './GreenFullButton.module.css'
const GreenFullButton = ({onClick, style, children}) => {
  return (
    <div className={styles.GreenFullButton} style={style}>
        <button onClick={onClick}>{children}</button>
    </div>
  )
}

export default GreenFullButton