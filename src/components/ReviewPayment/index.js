import React from 'react'
import AmountCharges from '../AmountCharges'
import GreenFullButton from '../GreenFullButton/GreenFullButton'
import InnerContentHeader from '../InnerContentHeader'
import './styles.scss'

const pakFlag = '../images/pakFlag.svg'
const usaFlag = '../images/usaFlag.svg'
const upDownArrows = "../images/upDownArrows.svg";
const circle = "../images/circle.svg";


const ReviewPayment = () => {
  return (
    <div className='review-payment'>
        <div className='review-payment-header'>
            <InnerContentHeader text="Review Payment"/>
            <p>Review transaction before you make the payment</p>
        </div>
        <div className='review-payment-body'>
            <div className='beneficiary-transaction'>
                <div className='beneficiary-details'>
                    <h5>BENEFICIARY DETAILS</h5>
                    <div className='review-name'>
                        <h6>Beneficiary Name</h6>
                        <span>Salman Altaf</span>
                    </div>
                    <div className='review-country'>
                        <h6>Country</h6>
                        <div className='review-country-flag'>
                            <img src={pakFlag} alt="pak flag err"/>
                        </div>
                        <span>Pakistan</span>
                    </div>
                    <div>
                        <h6>Beneficiary Account</h6>
                        <span>XXXX-XXXX-XXXX-1234</span>
                    </div>
                </div>
                <div className='transaction-details'>
                    <h5>TRANSACTION DETAILS</h5>
                    <div className='amount-charges'>
                        <div className='review-country-send'>
                            <h6>You send</h6>
                            <div className='review-country-flag'>
                                <img src={usaFlag} alt="usa flag err"/>
                            </div>
                            <span>USD 1,000</span>
                        </div>
                        <AmountCharges/>
                    </div>
                    <div className='review-country-send'>
                        <h6>Recipient get</h6>
                        <div className='review-country-flag'>
                            <img src={pakFlag} alt="usa flag err"/>
                        </div>
                        <span>PAK 14,500</span>
                    </div>
                </div>
            </div>
            <div className='review-payment-note'>
                <p>Note: Charges will be applicable as per Schedule of Bank Charges. Please <a href='https://www.google.com'>click here</a> to review the charges.</p>
            </div>
            <div className='confirmation-button'>
                <GreenFullButton style={{width: '50%', margin: '0 auto'}}>Confirm and Pay</GreenFullButton>
            </div>  
        </div>
    </div>
  )
}

export default ReviewPayment