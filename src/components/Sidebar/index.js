import React from 'react'
import './styles.scss'
import SidebarProfileView from './SidebarProfileView'
import SidebarTab from './SidebarTab'
const Sidebar = () => {
    const dp = "../images/profileImg.png"
    const overview = '../images/overview.svg'
    const accountSecurity = '../images/accountSecurity.svg'
    const cardsManagement = '../images/cardsManangement.svg'
    const payABill = '../images/payABill.svg'
    const referAFriend = '../images/referAFriend.svg'
    const sendMoney = '../images/sendMoney.svg'
    const settings = '../images/profileSettings.svg'
    const transcations = '../images/transactions.svg'

  return (
    <div className='sidebarMain'>
        <div className='sidebarWrap'>
            <SidebarProfileView imgLink={dp} profileName="Olalekan Abcdef" profileTNC="TNC#123456789" profileEmail="olalekan.l@transxnd" profileBalanceButton=" XOF 104,535.53"/>
            <SidebarTab tabIcon={overview} tabName="Overview"/>
            <SidebarTab tabIcon={transcations} tabName="Historic Transcations"/>
            <SidebarTab tabIcon={cardsManagement} tabName="Cards Management"/>
            <SidebarTab tabIcon={payABill} tabName="Pay a BIll"/>
            <SidebarTab tabIcon={sendMoney} tabName="Send Money"/>
            <SidebarTab tabIcon={referAFriend} tabName="Refer a friend"/>
            <SidebarTab tabIcon={accountSecurity} tabName="Account Security"/>
            <SidebarTab tabIcon={settings} tabName="Profile Settings"/>
        </div>
    </div>
  )
}

export default Sidebar