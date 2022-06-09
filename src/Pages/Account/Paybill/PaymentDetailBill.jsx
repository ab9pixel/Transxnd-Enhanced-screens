import React, { useLayoutEffect } from 'react'
import UserCard from '../../../Components/AccountComp/UserCard'
import MobViewBack from '../../../Components/MobViewBack'
import PaymentDetail from '../../../Utils/PaymentDetail'


const PaymentDetailBill = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <div className="bak_div">
                <MobViewBack link='/bil-detail' value='PAY A BILL' />
            </div>
            <div className='bil_payment_main_div'>
                <div className="user_card_div">
                    <UserCard />
                </div>
                <div className="payment_bil">
                <PaymentDetail 
                btnV='Proceed & Pay' 
                link='/confrim-otp' 
                backLink='/bil-detail'
                desc='Please enter bill amount! Or confirm payment if vendor has returned an amount!'
                amount='12123'
                title='XOF'
                 />
                </div>
            </div>
        </div>
    )
}

export default PaymentDetailBill
