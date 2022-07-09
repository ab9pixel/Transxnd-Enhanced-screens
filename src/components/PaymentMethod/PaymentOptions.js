import React from 'react'

const PaymentOptions = ({checkbox,text,methodOptionIcon,Click,index,clickedIndex}) => {
  return (
    <button onClick={Click}  className='payment-option'>
        <div className='checkbox-wrap'>
        <div className={index === clickedIndex ? "filledBox" : "emptyBox"}></div>
            {text}
        </div>
        <div className='checkbox-wrap'>
            <img src={methodOptionIcon} alt="creditCardIcon err"/>
        </div>
    </button>
  )
}

export default PaymentOptions