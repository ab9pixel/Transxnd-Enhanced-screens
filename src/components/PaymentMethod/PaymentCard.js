import React from 'react'


const PaymentCard = ({paymentImg, cardNumber, expiryDate,receipentName, cardImg}) => {
  return (
    <div className='payment-card'>
        <div className='card-image-number-wrapper'>
            <div className='payment-img'>
                <img src={paymentImg} alt='card err'/>
            </div>
            <span>{cardNumber}</span>
        </div>
        <div className='card-content-wrapper'>
        <div >
            <p className='expiry-name'>{expiryDate}</p>
            <p className='receipent-name'>{receipentName}</p>
        </div>
        <div className='card-image'>
            <img src={cardImg} alt='card img err'/>
        </div>
        </div>
    </div>
  )
}

export default PaymentCard