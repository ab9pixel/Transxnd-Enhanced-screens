import React from 'react'
import GreenFullButton from '../GreenFullButton/GreenFullButton'
import InnerContentHeader from '../InnerContentHeader'
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
                            <img src='' alt=""/>
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

                    </div>
                </div>
            </div>
            <div className='review-payment-note'>
                <p>Note: Charges will be applicable as per Schedule of Bank Charges. Please <a>click here</a> to review the charges.</p>
            </div>
            <div className='confirmation-button'>
                <GreenFullButton text="Confirm and Pay"/>
            </div>  
        </div>
    </div>
  )
}

export default ReviewPayment