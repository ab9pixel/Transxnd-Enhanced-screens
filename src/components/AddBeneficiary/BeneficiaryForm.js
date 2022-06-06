import React from 'react'
import SimpleButton from '../SimpleButton'
import './AddBeneficiary.scss'
import './styles.scss'
const BeneficiaryForm = ({setBen}) => {
  return (
    <div className='beneficiary-form'>
        <div className='beneficiary-form-header'>
            <h3>Add a beneficiary</h3>
            <p>Add a beneficiary to continue sending money</p>
        </div>
        <div className='beneficiary-input-fields'>
            <div className='name-email'>
                <div className='beneficiary-name'>
                    <label>Beneficiary Name</label>
                    <input type="text" name="name"/>
                </div>
                <div className='beneficiary-email'>
                    <label>Beneficiary Email Address</label>
                    <input type="text" name="email"/>
                </div>
            </div>
            <div className='beneficiary-account'>
                <label>Beneficiary Account Number</label>
                <input type="text" name="account"/>
            </div>
            <div className='beneficiary-country'>
                <label>Beneficiary Country</label>
                <input type="text" name="account"/>
            </div>
            <div className='beneficiary-form-add'>
                <SimpleButton style={{backgroundColor: 'transparent',color: '#27BDAD', border: "1px solid #27BDAD", marginRight:"15px"}} text="Back"/>
                <SimpleButton onClick = {()=>{setBen(true)}} style={{backgroundColor: '#2ED06E', color: 'white', border: "1px solid #2ED06E"}} text="Save Beneficiary"/>
            </div>
        </div>
    </div>
  )
}

export default BeneficiaryForm