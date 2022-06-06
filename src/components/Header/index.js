import '../../App.scss'
import React from 'react'
import "./styles.scss"
import Navbar from './Navbar'
import ProfileView from './ProfileView';
import allActions from '../../actions'
import {useDispatch, useSelector} from 'react-redux';
import ToggleSwitch from './ToggleSwitch.js'
const Header = () => {
    const darkMode = useSelector(state=>state.themeActions.darkMode)
    const dispatch = useDispatch();
    const dp = "../images/dp.png"
    const sunModeLogo = '../images/awesome-sun.svg'
  return (
    <div className={`headerMain ${darkMode?'dark-mode' : ''} `}>
        <div className='container'>
            <div className="headerWrap">
                <div className="navbarLeft">
                    <div className="logoWrap">
                        {darkMode?
                        <img src='../images/logo-dark.png' alt='LogoImage Error'/>
                        :<img src='../images/logoImage.png' alt='LogoImage Error'/>
                        }
                        </div>
                    <div className="navbarWrap">
                        <a href='#home'>
                            <Navbar navName='Home'/>
                        </a>|
                        <a href='#features'>
                            <Navbar navName='Features'/>
                        </a>|
                        <a href='#Payments'>
                            <Navbar navName='Payments'/>
                        </a>|
                        <a href='#pricing'>
                            <Navbar navName='Pricing'/>
                        </a>|
                        <a href='#getCard'>
                            <Navbar navName='Get Card'/>
                        </a>
                    </div>
                </div>
                <div className="navbarRight">
                    <div className="fontAwesome">
                       <button className="dark-color-button" onClick={()=>{dispatch(allActions.themeActions.setThemeMode())}}>
                            {
                            darkMode? <img src='../images/dark.png' alt="Sun Logo Err"/>
                            :
                            <img src={sunModeLogo} alt="Moon Logo Err"/>
                            }
                        </button>
                    </div>
                    <div className="profileView">
                        <ProfileView name="Olalekan" username="olalekan.I@tranxnd.com" profileImg={dp}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header