import React, { useContext, useLayoutEffect } from 'react'
import UserCard from '../../../Components/AccountComp/UserCard'
import { ColorContext } from '../../../Context/Context'
import {useHistory} from 'react-router-dom'
// assets 
import location from '../../../Assets/Group 4607.png'
import tick from '../../../Assets/Path 7452.png'
import Qr from '../../../Assets/Group 4558.png'
import QrL from '../../../Assets/Group 4558l.png'
import bill from '../../../Assets/Path 7480.png'
import orline from '../../../Assets/Path 7553.png'
import MobViewBack from '../../../Components/MobViewBack'

const VendorDetail = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const { color } = useContext(ColorContext)
    let { mode } = color
    const history = useHistory()

    return (
        <div>
            <div className="bak_div">
                <MobViewBack link='/pay-bill' value='PAY A BILL' />
            </div>
            <div className="pay_bill_main_div">
                <div className="pay_user_card_div">
                    <UserCard />
                </div>
                <div className="select_bill_div" style={{ backgroundColor: mode === 'dark' ? '#0E2725' : '' }}>
                    <h4 style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>VENDOR DETAILS</h4>
                    <p style={{ color: mode === 'light' ? '' : 'white' }}>Please select a vendor type and continue to proceed!</p>
                    <div className={mode === 'light' ? "vendor_detail_div" : 'vendor_detail_div vendor_D_detail_div'} >
                        <div className="country_div">
                            <div className="tick_sign">
                                <div className="country_input_slct">
                                    <label htmlFor="loc"><img src={location} alt="..." />
                                        <select name="loc" id="loc">
                                            <option value="">Country</option>
                                        </select>
                                    </label>
                                </div>
                                <img src={tick} alt="..." />
                            </div>
                            <div className="select_vendor_box" style={{ backgroundColor: mode === 'light' ? '#E9F8F7' : '#142b28' }}>
                                <h6 style={{ color: mode === 'light' ? '' : 'white' }}>Select a vendor</h6>
                                <div className={mode === 'light' ? "boxes_div" : 'boxes_div dark_box_div'}>
                                    <div className="boxempty"  ></div>
                                    <div className="boxempty"></div>
                                    <div className="boxempty"></div>
                                    <div className="boxempty"></div>
                                    <div className="boxempty"></div>
                                    <div className="boxempty"></div>
                                    <div className="boxempty"></div>
                                    <div className="boxempty"></div>
                                    <div className="boxempty"></div>
                                    <div className="boxempty"></div>
                                    <div className="boxempty"></div>
                                </div>
                            </div>
                        </div>
                        <div className="bill_id_div">
                            <div className="country_input_slct">
                                <label htmlFor="loc"><img src={bill} alt="..." />
                                    <input type="text" placeholder='Enter Bill Id' />
                                </label>
                            </div>
                            <div className="orLine_div">
                                <img src={orline} alt="..." />
                                <span style={{ color: mode === 'light' ? '' : 'white' }}> OR </span>
                                <img src={orline} alt="..." />
                            </div>
                            <p className='qr_para' style={{ color: mode === 'light' ? '' : 'white' }}>SCAN QR CODE</p>
                            <div className="qrcode_div" style={{ backgroundColor: mode === 'dark' ? '#142b28' : '#E9F8F7' }}>
                                <img src={mode==='light'? QrL:Qr} alt="..." />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button
                            className='back_btn'
                            onClick={() => history.push('/pay-bill')}

                            style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC', border: '1px solid #27BDAD' }}
                            >Back</button>
                        <button
                            className='con_btn'
                            onClick={()=>history.push('/bil-payment')}
                            style={{ backgroundColor: mode === 'light' ? "#27BDAD" : '#72FAEC', color: mode === 'light' ? 'white' : 'black' }}
                        >Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VendorDetail
