import React from 'react'

const PaymentOptions = ({checkbox,text,methodOptionIcon}) => {
  return (
    <div className='payment-option'>
        <div className='checkbox-wrap'>
            <img src={checkbox} alt="checkbox err"/>
            {text}
        </div>
        <div className='checkbox-wrap'>
            <img src={methodOptionIcon} alt="creditCardIcon err"/>
        </div>
    </div>
  )
}

export default PaymentOptions