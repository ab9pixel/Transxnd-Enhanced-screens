import React, { useEffect, useLayoutEffect, useState } from 'react'
import UserCard from '../../../Components/AccountComp/UserCard'
import MobViewBack from '../../../Components/MobViewBack'
import ConfrimWait from '../../../Utils/ConfrimWait'
import ThankYou from '../../../Utils/ThankYou'

const WaitMoney = () => {

    let [thanks, setThanks] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            console.log('run')
            setThanks(true)
        }, 2000)
    }, [])
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className="bak_div">
                <MobViewBack
                    link='/money-otp-confirm'
                    value='SEND MONEY'
                />
            </div>
            <div className='bil_payment_main_div'>
                <div className="user_card_div">
                    <UserCard />
                </div>
                <div className="payment_bil">
                    {!thanks ?
                        <ConfrimWait
                            number='924823202332'
                        />
                        :
                        <ThankYou
                            btnV='Make another transaction'
                            link='/select-bank'
                            success='Your payment has been made successfilly!'
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default WaitMoney
