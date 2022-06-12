import React from 'react'

const TransferCard = ({sendFlagImage, recipentFlagImage, sendAmount, recipientAmount, sendCurrency, recipientCurrency}) => {
  return (
    <div className='transfer-card'>
        <h5>Cash Collection</h5>
            <div className='collection-cash-country'>
                <div className='cash-country-image'>
                    <img src={sendFlagImage} alt='Flag Err'/>
                    <span>{sendCurrency}</span> 
                </div>
                <span className='line-span'/>
                <div className='cash-country-image'>
                    <img src={recipentFlagImage} alt='Flag Err'/>
                    <span>{recipientCurrency}</span>    
                </div>
            </div>
            <div className='collection-country-names'>
                <div className='send-cash-amount'>{sendAmount}</div>
                <div className='recipient-cash-amount'>{recipientAmount}</div>
            </div>
    </div>
  )
}

export default TransferCard