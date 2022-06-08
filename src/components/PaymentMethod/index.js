import React from 'react'
import InnerContentHeader from '../InnerContentHeader'
import CreditDebitCardDetails from './CreditDebitCardDetails'
import PaymentOptions from './PaymentOptions'
import './styles.scss'

const checkbox = '../images/search.svg'
const creditCardIcon = '../images/search.svg'
const cardIcon = '../images/search.svg'



const PaymentMethod = () => {

  return (
    <div className='payment-method'>
      <div className='payment-method-header'>
        <InnerContentHeader text="Select a payment method"/>
        <p>Select how'd you like to pay for this translation!</p>
      </div>
      <div className='payment-body'>
        <div className='payment-body-left'>
          <PaymentOptions checkbox={checkbox} text="Credit/Debit Card" methodOptionIcon={creditCardIcon}/>
          <PaymentOptions checkbox={checkbox} text="Tranxnd Wallet" methodOptionIcon={creditCardIcon}/>
          <PaymentOptions checkbox={checkbox} text="Bank Account" methodOptionIcon={creditCardIcon}/>
        </div>
        <div className='payment-body-right'>
          <h5>Credit/Debit Card</h5>
          <CreditDebitCardDetails checkbox={checkbox} cardNumber="9360" expiryDate="Expiry Date" userName="Salman Altaf" cardIcon={cardIcon}/>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethod