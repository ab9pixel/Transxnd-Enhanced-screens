import React, {useState, useEffect} from 'react'
import './styles.scss'

const Button = ({icon, text, dropdown, lessPadding, onClick}) => {
  const mobileIcon = "../images/mobile-calculator.svg"
  const [img, setImg] = useState(icon)
  
  useEffect(()=>{
    handleResize();
    window.addEventListener('resize', handleResize);
  },[])
  
  function handleResize() {
    window.innerWidth<990?setImg(mobileIcon):setImg(icon)
  }
  return (
    
        <div className="RateButton" style={{position:'relative'}}>
          <button onClick={onClick} style={{paddingLeft:lessPadding?'5px':'33px'}}>
            <img className='white-calculator' src={icon} alt="Awesome_Calculate_Error" />
            {/* <img className='green-calculator' src="../images/green_calculator.png" alt="Green_Calculate_Error"/> */}
            {text}
            {dropdown &&
            <svg style={{position:'absolute', right:'10'}} xmlns="http://www.w3.org/2000/svg" width="13.352" height="8.309" viewBox="0 0 13.352 8.309">
              <path id="Path_7650" data-name="Path 7650" d="M-22375.963,20575.891l6.676,8.309,6.676-8.309Z" transform="translate(22375.963 -20575.891)" fill="#fff"/>
            </svg>
            }
          </button>
        
    </div>
  )
}

export default Button