import React from 'react'
import './styles.scss'
import InnerContentHeader from '../InnerContentHeader'
import GreenFullButton from '../GreenFullButton/GreenFullButton'
import {useDispatch, useSelector} from 'react-redux';

const mobileEdit = '../images/mobile-edit.png'
const mobileImage = '../images/mobileImage.png'
const warningImage = '../images/warning.png'
const OtpConfirmation = () => {
    const darkMode = useSelector(state=>state.themeActions.darkMode)
    const dispatch = useDispatch();

  return (
    <div className={`otp-confirmation ${darkMode?'dark-mode' : ''} `}>
        <div className='otp-confirmation__header'>
            <InnerContentHeader text="OTP Confirmation"/>
            <p>Please enter the 4 digit OPT sent on your email and phone number!</p>
        </div>
        <div className='otp-confirmation__body'>
            <p>We've sent a code on your registered mobile number. </p>
            <div className='mobile-number'>
                <span>+92 312 486 7888</span>
                <button>
                    <img src={mobileEdit} alt='mobile Edit err'/>
                </button>
            </div>
            <div className='mobile-image'>
                <img src={mobileImage} alt='mobileImage err'/>
            </div>
            <div className='otp-inputs'>
                <input type="text" name='otp' maxLength="1"/>
                <input type="text" name='otp' maxLength="1"/>
                <input type="text" name='otp' maxLength="1"/>
                <input type="text" name='otp' maxLength="1"/>
            </div>
            <div className='otp-warning'>
                <div className='warning-sign'>
                    <img src={warningImage} alt='warning Img err'/>
                    <span>Any frontend errors will show here!</span>
                </div>
                <div className='otp-expiry-time'>
                    <span>Resend OTP (00:30)</span>
                </div>
                <div className='opt-confirmation-button'>
                    <GreenFullButton style={{margin: '0 auto'}}>Confirm and Pay</GreenFullButton>
                </div>
                <p>
                    Did'nt receive a code?
                </p>
            </div>
        </div>
    </div>
  )
}

export default OtpConfirmation