import React from 'react'


const CollectionCard = ({paymentImg, cardNumber, expiryDate,receipentName, cardImg}) => {
  return (
     <div className='collection-card-container'>
          <div className='collection-card-heading-wrapper'>
          <span className='collection-card-heading'>
          Collection Point Name
          </span>
          <span className='collection-card-text'>
          Collection ID
          </span>
          </div>
          <span className='collection-card-text'>
          Collection point address
          </span>
        </div> 
  )
}

export default CollectionCard