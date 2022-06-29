import React from 'react'
import styles from './styles.scss'
const TogglerButton = () => {
  return (
    <>
      <input
        className="reactSwitchCheckbox"
        id={`reactSwitchNew`}
        type="checkbox"
      />
      <label
        className="reactSwitchLabel"
        htmlFor={`reactSwitchNew`}
      >
        <span className="reactSwitchButton" />
      </label>
    </>
  )
}

export default TogglerButton