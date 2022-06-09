import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { ColorContext } from '../Context/Context'
import './style/payment.css'

const PaymentDetail = ({btnV,link,backLink,desc,amount,title}) => {
    const history = useHistory()
    const { color } = useContext(ColorContext)
    let { mode } = color
    return (
        <div className='payemn_detail_container'>
            <div className="payment_detail_main_div">
                <div className="paymen_div" style={{ backgroundColor: mode === 'light' ? '#E9F8F7' : '#0E2725' }}>
                    <h4 style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>PAYMENT DETAILS</h4>
                    <p
                        style={{ color: mode === 'light' ? '' : 'white' }}
                    >{desc}</p>
                    <div className="amount_div">
                        <p style={{ color: mode === 'light' ? '' : 'white' }}>{title}</p>
                        <h4 style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>{amount}</h4>
                    </div>
                    <div className='payment_btns'>
                        <button
                            className='back_btn'
                            onClick={()=>history.push(backLink)}
                            style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC', border: '1px solid #27BDAD' }}
                        >Back</button>
                        <button
                        onClick={()=>history.push(link)}
                            style={{ backgroundColor: mode === 'light' ? "#27BDAD" : '#72FAEC', color: mode === 'light' ? 'white' : 'black' }}
                            className='con_btn proced'
                        >{btnV}</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PaymentDetail
