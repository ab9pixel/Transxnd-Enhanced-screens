import React, { useLayoutEffect } from 'react'
import UserCard from '../../../Components/AccountComp/UserCard'
import ThankYou from '../../../Utils/ThankYou'


const SuccessFul = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <div className='bil_payment_main_div'>
                <div className="user_card_div">
                    <UserCard />
                </div>
                <div className="payment_bil">
                    <ThankYou />
                </div>
            </div>
        </div>
    )
}

export default SuccessFul
