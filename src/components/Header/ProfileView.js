import React from 'react'
import './styles.scss'
const ProfileView = ({name, username, profileImg}) => {
  return (
    <div className="profileViewMain">
        <div className="profileNameUsername">
            <div className="profileName">{name}</div>
            <div className="profileUsername"><h5>{username}</h5></div>
        </div>
        <div className="ProfileViewPhoto">
            <img src={profileImg} alt="ProfileImage Error"/>
        </div>
    </div>
  )
}

export default ProfileView