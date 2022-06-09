import React from 'react'
import GreenFullButton from '../GreenFullButton/GreenFullButton'
import InnerContentHeader from '../InnerContentHeader'
import CreditDebitCardDetails from './CreditDebitCardDetails'
import PaymentOptions from './PaymentOptions'
import './styles.scss'

const checkbox = '../images/search.svg'
const creditCardIcon = '../images/search.svg'
const cardIcon = '../images/search.svg'



const PaymentMethod = () => {

  const addCreditCard = () =>{
    
  }
  const chooseCounty = () => {

  }

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
          <div className='credit-card-display'>
            {/* <CreditDebitCardDetails checkbox={checkbox} cardNumber="9360" expiryDate="Expiry Date" userName="Salman Altaf" cardIcon={cardIcon}/>
            <GreenFullButton 
            onClickFunc={addCreditCard}
            style={{boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'}}
            > Add a new credit/debit card</GreenFullButton> */}
          </div>
          <div className='credit-card-form'>
              <div className='card-number-field'>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder='Card Number'
                />
              </div>
              <div className='expiry-cvv'>
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder='Expiry Date'
                  />
                  <input
                    type="text"
                    name="cvvNumber"
                    placeholder='CVV'
                  />
              </div>
              <div className='card-cardholder-field'>
                <input
                  type="text"
                  name="cardHolderName"
                  placeholder='Cardholder Name'
                />
              </div>
              <div className='country-zipcode'>
                  {/* <input
                    type="text"
                    name="county"
                    placeholder='County'
                  /> */}
                  <div class="select-wrapper">
                    <select class="selectpicker countrypicker" data-flag="true">
                      <option value="">Country</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="PAK">PAK</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    name="zipCode"
                    placeholder='ZIP Code'
                  />
              </div>
              <div className='radio-input'>
                  
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethod