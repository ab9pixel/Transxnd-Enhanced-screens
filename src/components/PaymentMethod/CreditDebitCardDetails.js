import React from 'react'

const CreditDebitCardDetails = ({checkbox,cardNumber,expiryDate, userName, cardIcon}) => {
  return (
    <div className='card-details-wrap'>
        <div className='checkbox-wrap'>
            <img src={checkbox} alt="checkbox err"/>
        </div>
        <div className='card-details'>
            <span>XXXX-XXXX-XXXX-{cardNumber}</span>
            <p>{expiryDate}</p>
            <div className='card-name-icon'>
                <span>{userName}</span>
                <div className='creditCardIcon'>
                    <img src={cardIcon} alt='creditCardIcon err'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreditDebitCardDetails