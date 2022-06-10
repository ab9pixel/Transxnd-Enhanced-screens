import React from 'react'

const WalletAmount = ({text, amount, marginBottom, color, fontSize}) => {
  return (
    <div className='wallet-amount' style={{marginBottom: marginBottom}}>
        <p>{text}</p>
        <span style={{color: color, fontSize: fontSize}}>{amount}</span>
    </div>
  )
}

export default WalletAmount