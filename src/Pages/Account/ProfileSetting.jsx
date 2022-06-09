import React, { useState, useContext, useLayoutEffect } from 'react'
import UserCard from '../../Components/AccountComp/UserCard'
import PersonalDetail from '../../Components/AccountComp/PersonalDetail'
import UploadLicns from '../../Components/AccountComp/UploadLicns'
import { ColorContext } from '../../Context/Context'
// assets 
import user from '../../Assets/Path 7446.png'
import upload from '../../Assets/Group 4482.png'
import uploadD from '../../Assets/Group 4482d.png'
import './styles/Setting.css'
import MobViewBack from '../../Components/MobViewBack'

const ProfileSetting = () => {

    const { color } = useContext(ColorContext)
    let { mode } = color

    let [next, setNext] = useState(false)
    const handleNext = () => {
        setNext(true)
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <div className="bak_div">
                <MobViewBack link='/' value='SECURITY SETTINGS' />
            </div>
            <div className="setting_main_div dashboard_main">
                <div>
                    <UserCard />
                </div>
                <div className="personal_info_div" style={{ backgroundColor: mode === 'light' ? '#E9F8F7' : '#112626' }}>
                    <h5 style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>UPDATE PERSONAL INFORMATION</h5>
                    <p style={{ color: mode === 'light' ? 'black' : 'white' }}
                    >Request a change to your profile details. Please note that changes are subject
                    to provision of a proof such as a valid identity card/passport and verification by our team!</p>
                    {!next ?
                        <PersonalDetail head nextFunc={handleNext} height='uploc_height' />
                        :
                        <UploadLicns head sBtn />
                    }
                </div>
                <div className="updateImg_div" style={{ backgroundColor: mode === 'light' ? '#E9F8F7' : '#0E2725' }}>
                    <h5 style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>Change Profile Picture</h5>
                    <p style={{ color: mode === 'light' ? 'black' : 'white' }}
                    >Change your profile picture! Please use a picture so face is fully visible and clear!</p>
                    <div>
                        <img src={user} alt="..." />
                        <div>
                            <img className='upload_profile' src={mode==='light'? upload:uploadD} alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSetting
