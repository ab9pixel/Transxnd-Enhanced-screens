import React, { useContext, useLayoutEffect } from 'react'
import UserCard from '../../Components/AccountComp/UserCard'
// assets 
import s1 from '../../Assets/Group 4488.png'
import s2 from '../../Assets/Group 4489.png'
import s3 from '../../Assets/Group 4490.png'
import s4 from '../../Assets/Group 4491.png'
import s5 from '../../Assets/Group 4492.png'
import s6 from '../../Assets/Group 4493.png'
import or from '../../Assets/Path 7553.png'
import email from '../../Assets/Icon feather-mail.png'
import emailL from '../../Assets/Icon feather-maill.png'
import linkG from '../../Assets/Group 4484.png'
import linkGD from '../../Assets/Group 4484d.png'
import link from '../../Assets/Icon feather-link-2.png'
import linkD from '../../Assets/Icon feather-link-2d.png'
import copy from '../../Assets/Icon feather-copy.png'
import copyD from '../../Assets/Icon feather-copyd.png'
import './styles/Refer.css'
import { ColorContext } from '../../Context/Context'

const ReferFriend = () => {
    const { color } = useContext(ColorContext)
    let { mode } = color

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <div className="refer_main_ dashboard_main">
                <div className="user_card_div2">
                    <UserCard />
                </div>
                <div className="refer_card_social" style={{ backgroundColor: mode === 'light' ? '#E9F8F7' : '#112626' }}>
                    <h5 style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>REFER A FRIEND</h5>
                    <div className='social_share_head'>
                        <h5 style={{ color: mode === 'dark' ? '#72FAEC' : '#27BDAD' }}>Share on social media</h5>
                        <p
                            style={{ color: color.mode === 'light' ? '' : 'white' }}
                        >Share referral link on social media on your favorite social networking websites!</p>
                    </div>
                    <div className="social_icon_div">
                        <img src={s1} alt="..." />
                        <img src={s2} alt="..." />
                        <img src={s3} alt="..." />
                        <img src={s4} alt="..." />
                        <img src={s5} alt="..." />
                        <img src={s6} alt="..." />
                    </div>
                    <div className="orline_div">
                        <img src={or} alt="..." />
                        <span style={{ color: color.mode === 'light' ? '' : 'white' }}> OR </span>
                        <img src={or} alt="..." />
                    </div>
                    <div className="emailInput">
                        <h5 style={{ color: mode === 'dark' ? '#72FAEC' : '#27BDAD' }}>Enter friend's email</h5>
                        <p
                            style={{ color: mode === 'light' ? '' : 'white' }}
                        >Send a personalized email link to your friend or family! Simply enter email and send a referral link!</p>
                        <div className="pass_inpt entr_link">
                            <img src={mode === 'dark' ? email : emailL} alt="..." />
                            <input
                                type='email'
                                placeholder='Recipient email address'
                                className={mode==='light'?'light_inp':'dark_inp'}
                            />
                        </div>
                        <div >
                            <button
                                className='change_pss_btn'
                                style={{ backgroundColor: mode === 'light' ? "#27BDAD" : '#72FAEC', color: mode === 'light' ? 'white' : 'black' }}
                            >Share Now</button>
                        </div>
                    </div>
                </div>
                <div className="refer_copylink_card" style={{ backgroundColor: mode === 'light' ? '#E9F8F7' : '#112626' }}>
                    <img src={mode==='light'? linkG:linkGD} alt="..." />
                    <h5 style={{ color: mode === 'dark' ? '#72FAEC' : '#27BDAD' }}>Share via invite link</h5>
                    <p style={{ color: mode === 'light' ? '' : 'white' }}>Copy the invite link and send to your friends or family via messages or any medium you link!</p>
                    <div className="link_inpt">
                        <img src={mode==='light'? link:linkD} alt="..." />
                        <input 
                        type='email' 
                        className={mode==='light'?'light_inp':'dark_inp'}
                        value='https://www.youtube.com/watch?v=pba_' readOnly  />
                        <img src={mode==='light'? copy:copyD} alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReferFriend
