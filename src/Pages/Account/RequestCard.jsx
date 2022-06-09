import React, { useLayoutEffect } from 'react'
import CStepper from '../../Components/AccountComp/Stepper'
import UserCard from '../../Components/AccountComp/UserCard'
import MobViewBack from '../../Components/MobViewBack'

const RequestCard = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <React.Fragment>
            <div className="bak_div">
                <MobViewBack link='/active-card' value='YOUR CARD' />
            </div>
            <div className='new_card_container'>
                <div className="user_card_div1">
                    <UserCard />
                </div>
                <div className="stepper_div">
                    <CStepper />
                </div>
            </div>
        </React.Fragment>
    )
}

export default RequestCard
