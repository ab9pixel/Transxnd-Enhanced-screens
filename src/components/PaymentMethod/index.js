import React, {useState} from 'react'
import GreenFullButton from '../GreenFullButton/GreenFullButton'
import InnerContentHeader from '../InnerContentHeader'
import CreditDebitCardDetails from './CreditDebitCardDetails'
import PaymentOptions from './PaymentOptions'
import RadioMark from '../InnerSidebar/RadioMark'
import './styles.scss'
import WalletAmount from './WalletAmount'
import {useDispatch, useSelector} from 'react-redux';

const checkbox = '../images/hollow-checkbox.svg'
const creditCardIcon = '../images/credit-card.svg'
const bankIcon = '../images/bank.svg'
const cardIcon = '../images/search.svg'
const transxndIcon = '../images/transxnd.svg'
const spinnerImage = '../images/spinner-image.svg'
const warningAlert = '../images/warning.svg'

const PaymentMethod = () => {
  const [saveCard, setSaveCard] = useState(false)
  const [countryFlag, setCountyFlag] = useState('usd')
  const flag = `../images/${countryFlag}.png`;
  const darkMode = useSelector(state=>state.themeActions.darkMode);
  const dispatch = useDispatch();

  const changeFlagHandler = (e) => {
    setCountyFlag(e.target.value);
  }
  const addCreditCard = () =>{
    
  }
  const chooseCounty = () => {

  }

  return (
    <div className={`payment-method ${darkMode?'dark-mode' : ''} `}>
      <div className='payment-method-header'>
        <InnerContentHeader text="Select a payment method"/>
        <p>Select how'd you like to pay for this translation!</p>
      </div>
      <div className='payment-body'>
        <div className='payment-body-left'>
          <PaymentOptions checkbox={checkbox} text="Credit/Debit Card" methodOptionIcon={creditCardIcon}/>
          <PaymentOptions checkbox={checkbox} text="Tranxnd Wallet" methodOptionIcon={transxndIcon}/>
          <PaymentOptions checkbox={checkbox} text="Bank Account" methodOptionIcon={bankIcon}/>
        </div>
        <div className='payment-body-right'>
          {/* <div className='credit-card-display'>
            <h5>Credit/Debit Card</h5>
            <CreditDebitCardDetails checkbox={checkbox} cardNumber="9360" expiryDate="Expiry Date" userName="Salman Altaf" cardIcon={cardIcon}/>
            <GreenFullButton 
            onClick={addCreditCard}
            style={{boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'}}
            > Add a new credit/debit card</GreenFullButton>
          </div> */}

          {/* <div className='credit-card-form'>
              <h5>Credit/Debit Card</h5>
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
                  <div class="select-wrapper">
                    <img src={flag} alt='countryFlag Err'/>
                    <select
                    value={countryFlag}
                    onClick={changeFlagHandler}
                    >
                      <option value="usd">Country</option>
                      <option value="usd">USA</option>
                      <option value="pkr">PAK</option>
                      <option value="uk">UK</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    name="zipCode"
                    placeholder='ZIP Code'
                  />
              </div>
              <div className='radio-input'>
                <span className="radio-mark">  {
                  saveCard > 1? <RadioMark active={true} />
                  : saveCard === 1 ? <RadioMark active={false} /> 
                  :<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                    <g id="Group_4808" data-name="Group 4808" transform="translate(0.089 0.063)">
                      <g id="Ellipse_1034" data-name="Ellipse 1034" transform="translate(-0.088 -0.063)" fill="rgba(114,250,236,0.05)" stroke="#72faec" stroke-width="2">
                        <circle cx="7.5" cy="7.5" r="7.5" stroke="none"/>
                        <circle cx="7.5" cy="7.5" r="6.5" fill="none"/>
                      </g>
                    </g>
                  </svg>
                  }
                </span> 
                <span>
                  Save card information for future payments
                </span>
              </div>
          </div> */}
        
          {/* <div className='spinner'>
            <div className='spinner-header'>
              <h5>Tranxnd Wallet</h5>
            </div>
            <div className='spinner-image'>
              <img src={spinnerImage} alt="loadingErr"/>
            </div>
            <span>Please wait while we process your information</span>
          </div> */}
          
          {/* <div className='tranxnd-wallet'>
            <div className='wallet-header'>
              <h5>Tranxnd Wallet</h5>
            </div>
            <WalletAmount text="Current Balance" amount="XOF 104,535.53" marginBottom="42px" color= "#27BDAD"/>
            <WalletAmount text="Transaction Amount" amount="XOF 4,500.00" marginBottom="230px" color= "#27BDAD"/>
          </div> */}

          <div className='wallet-response'>
            <h5>Tranxnd Wallet</h5>
            <div className='wallet-resonse-img'>
              <img src={warningAlert} alt="warningAlert"/>
            </div>
            <p className='warning-message'>Insufficient Wallet allowance:</p>
            <p className='response-para'>The source wallet maximum balance will not be enough to pay for this transaction even if you transfer funds into it.</p>
            <p className='response-para'>Please select a different payment method or reduce the transaction amount to continue with the current source wallet.</p>
            <div className='response-balance-amount'>
                <WalletAmount text="Current Balance" amount="XOF 104,535.53" marginBottom="23px" color= "#FA7272" fontSize="22px"/>
                <WalletAmount text="Transaction Amount" amount="XOF 4,500.00" marginBottom="23px" color= "#27BDAD" fontSize="22px"/>
            </div>
            <GreenFullButton style={{width: '90%', margin: '0 auto'}}>Fund your transxnd wallet</GreenFullButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethod