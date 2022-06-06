import React from 'react'
import './styles.scss'
const SidebarProfileView = ({imgLink, profileName, profileTNC, profileEmail, profileBalanceButton}) => {
  return (
        <div className='SidebarProfileViewWrap'>
            <div className='imageDiv'>
                <img src={imgLink} alt='profileImage'/>
            </div>
            <div className='profileName'>
                <span>{profileName}</span>
            </div>
            <div className='profileTNC'>
                <span>{profileTNC}</span>
            </div>
            <div className='profileEmail'>
                <span>{profileEmail}</span>
            </div>
            <div className='profileBalanceButton'>
                <button>Your Balance: {profileBalanceButton}</button>
            </div>
        </div>
  )
}

export default SidebarProfileView