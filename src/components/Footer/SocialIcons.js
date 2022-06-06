import React from 'react'
import "./styles.scss";
const SocialIcons = ({iconLink, style}) => {
  return (
    <div className="SocialIconsMain" style={style}>
        <img src={iconLink} alt="Social Icon Err"/>
    </div>
  )
}

export default SocialIcons