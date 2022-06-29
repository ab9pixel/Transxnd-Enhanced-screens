import React from "react";
import "./styles.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomButton from "../CustomButton";
import SocialIcons from "./SocialIcons";
import MenuHeading from "./MenuHeading";
import {useSelector} from 'react-redux';
import TogglerButton from '../../components/TogglerButton'
const Footer = () => {
    const footerLogo= '../images/logoImage.png'
    const facebookLogo = '../images/awesome-facebook-f.svg'
    const instagamLogo = '../images/awesome-instagram.svg'
    const linkedinLogo = '../images/awesome-linkedin-in.svg'
    const twitterLogo = '../images/awesome-twitter.svg'
    const emailLogo = '../images/awesome-email.svg'
    const sunModeLogo = '../images/awesome-sun.svg'
    const copyrightLogo = '../images/awesome-copyright.svg'
    const darkMode = useSelector(state=>state.themeActions.darkMode)
  return (
    <div className={`footerMain ${darkMode?'dark-mode':''}`}>
        <div className="container">
      <div className="footerWrap">
        <Row>
          <Col lg={4}>
            <div className="footerLeft">
              <div className="footerLeftWrap">
                  <div className="footerLogo">
                    {darkMode?<img src='../images/logo-dark.png' alt='LogoImage Error'/>:
                    <img src={footerLogo} alt="logoError"/>}
                  </div>
                  <div className="footerButton">
                    <CustomButton text="Sign Up" style={{margin: '41px 28px 31px 0px'}}/>
                    <CustomButton text="Login" style={{margin: '41px 28px 31px 0px'}}/>
                  </div>
                  <div className="footerAddress">
                    <p>Transxnd Remittance Services SARL Quatier Avenou, Boulevard Du 30 Aout, 05 BP 851 Lome, Togo</p>
                  </div>
                  <div className="footerContact">
                    <div>
                        <p>IBC: BVI 2022059 <br/>
                        RCCM: MA-BKO 2019 E-14904<br/>
                        RCCM: NE-NIM 01 2019 B13 00387</p>
                    </div>
                    <div>
                        <p>RCCM: CI-ABJ 2020 B 01087 <br/>
                        RCCM: TG-LOM 2019 B3045</p>                        
                    </div>
                  </div>
                  <div className="footerSocialIcons">
                    <SocialIcons iconLink={facebookLogo} style={{marginRight: '23px'}}/>
                    <SocialIcons iconLink={instagamLogo} style={{marginRight: '23px'}}/>
                    <SocialIcons iconLink={linkedinLogo} style={{marginRight: '23px'}}/>
                    <SocialIcons iconLink={twitterLogo}/>
                  </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="footerMiddle">
              <div className="footerMiddleWrap">
                  <div className="menuListOne">
                    <MenuHeading text="Tranxnd" />
                    <ul>
                        <li>Home</li>
                        <li>Payments</li>
                        <li>Features</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                  </div>
                  <div className="menuListTwo">
                    <MenuHeading text="Legal"/>
                    <ul>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>Company Policy</li>
                    </ul>
                  </div>
                  <div className="menuListThree">
                    <MenuHeading text="Business"/>
                    <ul>
                        <li>Contact Us</li>
                        <li>Invest with us</li>
                        <li>Feedback</li>
                    </ul>
                  </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="footerRight">
              <div className="footerRightWrap">
                <MenuHeading text="Newsletter"/>
                <p>
                    Join all the people who get the best exchange rates with Transxnd. We're cheaper than most leading African Banks. Enjoy rapid transfers and the lowest fees. Your friends and family get more when you send them money with Transxnd.
                </p>
                <div className="footerInput">
                    <input type="text" name="email" placeholder="Enter Email"/>
                    <div className="emailLogoWrap">
                        <img src={emailLogo} alt="EmailError"/>
                    </div>
                </div>
                <div className="modeAndLang">
                    <div className="mode">
                        <img src={sunModeLogo} alt="sunModeError"/>
                    </div>
                    <div className="lang">
                        
                    </div>
                    <div>
                    <TogglerButton />
                    </div>
                </div>
                
              </div>
            </div>
          </Col>
        </Row>
        <div className="copyRight">
            <p>Copyright {darkMode?<img src='../images/copyright-dark.png' alt="copyRightError"/>:<img src={copyrightLogo} alt="copyRightError"/>  }2021. Transxnd Inc. All rights reserved.</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
