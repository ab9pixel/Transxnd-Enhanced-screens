import React from 'react'
import './styles.scss'
const SidebarTab = ({tabIcon,tabName}) => {
  return (
    <div className='tabMain'>
        <div className='tabIcon'>
          <img src={tabIcon} alt="tab Icon Err"/>
        </div>
        <div className='tabName'>
            {tabName}
        </div>
    </div>
  )
}

export default SidebarTab