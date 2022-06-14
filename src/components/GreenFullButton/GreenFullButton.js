import React from 'react'
import styles from './GreenFullButton.module.css'
const GreenFullButton = ({onClickFunc, style, children}) => {
  return (
    <div className={styles.GreenFullButton} style={style}>
        <button onClick={onClickFunc}>{children}</button>
    </div>
  )
}

export default GreenFullButton