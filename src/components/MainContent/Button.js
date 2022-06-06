import React from 'react'
import './styles.scss'

const Button = ({icon, text, dropdown, lessPadding, onClick}) => {
  return (
    <div>
        <div className="RateButton" style={{position:'relative'}}>
          <button onClick={onClick} style={{paddingLeft:lessPadding?'5px':'33px'}}>
            <img src={icon} alt="Awesome_Calculate_Error" />
            {text}
            {dropdown &&
            <svg style={{position:'absolute', right:'10'}} xmlns="http://www.w3.org/2000/svg" width="13.352" height="8.309" viewBox="0 0 13.352 8.309">
              <path id="Path_7650" data-name="Path 7650" d="M-22375.963,20575.891l6.676,8.309,6.676-8.309Z" transform="translate(22375.963 -20575.891)" fill="#fff"/>
            </svg>
            }
          </button>
        </div>
    </div>
  )
}

export default Button