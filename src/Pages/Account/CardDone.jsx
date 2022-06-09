import React, { useContext, useLayoutEffect } from 'react'
import UserCard from '../../Components/AccountComp/UserCard'
import { ColorContext } from '../../Context/Context'
import thankyou from '../../Assets/Group 4361d.png'
import thankyouL from '../../Assets/Group 4361l.png'
import MobViewBack from '../../Components/MobViewBack'


const CardDone = () => {
    const { color } = useContext(ColorContext);
    let { mode } = color
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <React.Fragment>
            <div className="bak_div">
                <MobViewBack link='/request-new-card' value='YOUR CARD' />
            </div>
            <div className='request_done_conatiner'>
                <div className="user_div">
                    <UserCard />
                </div>
                <div className="request_card_thank_you" style={{ backgroundColor: mode === 'light' ? '#E9F8F7' : '' }}>
                    <div className="stepper_conataine">
                        <h5 style={{ color: mode === 'dark' ? '#72FAEC' : '#27BDAD' }} >REQUEST A NEW CARD</h5>
                        <p
                            style={{ color: color.mode === 'light' ? '' : 'white' }}
                        >
                            Please ensure that your profile data is correct and up-to-date before sending in a Card request.
                            Use the button below to update your profile.
                  </p>
                        <div className='thank_you_card_para'>
                            <img className='thanks_img' src={mode==='light'? thankyouL:thankyou} alt="..." />
                            <h5 style={{ color: color.mode === 'light' ? '#27BDAD' : 'white' }}>Thank You</h5>
                            <p
                                style={{ color: color.mode === 'light' ? '' : 'white' }}>
                                Your request has been made Submitted!</p>
                            <p
                                style={{ color: color.mode === 'light' ? '' : 'white' }}>
                                You'll receive on SMS when your card is deliverd!</p>
                            <button
                                className='con_btn proced'
                                style={{ backgroundColor: mode === 'light' ? "#27BDAD" : '', color: mode === 'light' ? 'white' : '' }}
                            >Track card Delivery</button>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default CardDone

