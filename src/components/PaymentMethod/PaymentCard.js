import React from 'react'


const PaymentCard = ({paymentImg, cardNumber, expiryDate,receipentName, cardImg}) => {
  return (
    // <div className='payment-card'>
    //     <div className='card-image-number'>
    //         <div className='payment-img'>
    //             <img src={paymentImg} alt='card err'/>
    //         </div>
    //         <span>{cardNumber}</span>
    //     </div>
    //     <div className='expiry-name'>
    //         <p>{expiryDate}</p>
    //         <p>{receipentName}</p>
    //     </div>
    //     <div className='card-image'>
    //         <img src={cardImg} alt='card img err'/>
    //     </div>
    // </div>
    <div className='checkbox-wrap'>
      <div className="credit-cart-content-wrapper">
        <p className="card-details-span">
          XXXX-XXXX-XXXX-9360
        </p>
        <div className="credit-cart-span-wrapper">
          <div className="credit-cart-span">
            <span className="credit-card-span">Expiry Date</span>
            <span className="credit-card-span">Salman Altaf</span>
          </div>
          <div className='credit-card-img'>
            <img src={cardImg} alt="creditCardIcon err" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default PaymentCard