import React, { useLayoutEffect } from 'react'
import UserCard from '../../../Components/AccountComp/UserCard'
import MobViewBack from '../../../Components/MobViewBack'
import Confirmotp from '../../../Utils/Confirmotp'


const ConfirmOtpMoney = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const code = ['1','2','3','4']
    const codeEmail = ['-','-','-','-']


    return (
        <div>
            <div className="bak_div">
                <MobViewBack link='/confrim-transaction' value='SEND MONEY' />
            </div>
            <div className='bil_payment_main_div'>
                <div className="user_card_div">
                    <UserCard />
                </div>
                <div className="payment_bil">
                    {/* <PaymentDetail /> */}
                    <Confirmotp
                        nextLink='/money-successful'
                        mobNumber='+943322392320'
                        resend='Resend OTP (00:30)'
                        mail='abc@123gmail.com'
                        error='Any frontend error show here!'
                        code={code}
                        codeEmail={codeEmail}
                    />
                </div>
            </div>
        </div>
    )
}

export default ConfirmOtpMoney
