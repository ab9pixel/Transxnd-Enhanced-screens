import React from 'react'
import './styles.scss'
const SupportMessage = ({buttonLink}) => {

  const backScreenHandler = () => {
    
  }
  const nextScreenHandler = () => {
    if(buttonLink ==="transaction"){
      
    }
  }
  

  return (
    <div className='support-message'>
        <div>
          Have a problem? Contact <span>Customer Support Team</span>
          {
            buttonLink ? (<div>
          <button onClick={backScreenHandler}>Back</button>
          <button onClick={nextScreenHandler}>Continue</button>
            </div>) : null
          }

        </div>
    </div>
  )
}

export default SupportMessage