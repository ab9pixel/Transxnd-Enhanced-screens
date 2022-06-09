import React, { useContext, useState } from 'react'
import { ColorContext } from '../../Context/Context'
// assets
import card1 from '../../Assets/Airtel-Logo-PNG-Image-715x269.png'
import card2 from '../../Assets/Mask Group 15.png'
import user from '../../Assets/Icon feather-mail.png'
import userL from '../../Assets/Icon feather-maill.png'
import slct from '../../Assets/Group 4580 dark.png'
import path from '../../Assets/Path 7591.png'
import tick from '../../Assets/Path 7452.png'
import slctL from '../../Assets/Group 4580.png'


const SelectPayment = () => {
    const { color } = useContext(ColorContext)
    let { mode } = color
    let [card, setCard] = useState('')

    return (
        <div className='payment_method_container'>
            <div className="billing_detail_div" style={{ backgroundColor: mode === 'light' ? '#d5f2f0' : '' }}>
                <h6>BILLING DETAILS</h6>
                <div className="billig_type_div">
                    <p>Card Type</p>
                    <p className='card_grn' style={{ color: mode === 'light' ? '#27BDAD' : '' }} >Master Card</p>
                </div>
                <div className="detail_payment">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod te</p>
                </div>
                <img src={path} className='path_line_s' alt="..." />
                <div className="billig_type_div">
                    <p>Card Issuance Fee</p>
                    <p className=''>XOF 20. <sup> 59 </sup></p>
                </div>
                <div className="detail_payment">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
                </div>
                <div className="billig_type_div sub_billing_type_div">
                    <p>Card Issuance Fee</p>
                    <p className=''>XOF 20. <sup> 59 </sup></p>
                </div>
                <div className="detail_payment sub_billing_type_para">
                    <p>Lorem ipsum dolor sit amet,</p>
                </div>
                <img src={path} className='path_line_s' alt="..." />
                <div className="billig_type_div">
                    <p>Total Fee</p>
                    <p className='card_grn' style={{ color: mode === 'light' ? '#27BDAD' : '' }}>XOF 20. <sup> 59 </sup></p>
                </div>
            </div>
            <div className='select_card_container payment_method_main_div' style={{ backgroundColor: mode === 'light' ? '#d5f2f0' : '' }}>
                <h6>SELECT A PAYMENT METHOD</h6>
                <div className="card_veriety_div">
                    <div className="atm_cards">
                        <label htmlFor="b-2" >
                            <div className={`card_img_atm atm1_div ${card === 'master' ?
                                mode === 'dark' ?
                                    'active'
                                    :
                                    'active2'
                                :
                                ''
                                }`} onClick={() => setCard('master')} >
                                <img className='atm2' src={card1} alt="..." />
                                {card === 'master' ?
                                    <img className='slct_tick' src={mode === 'dark' ? slct : slctL} alt="..." />
                                    : null
                                }
                            </div>
                        </label>
                        <p>Airtel</p>
                    </div>
                    <div className="atm_cards">
                        <div className={`card_img_atm atm1_div ${card === 'virtual' ?
                            mode === 'dark' ?
                                'active'
                                :
                                'active2'
                            :
                            ''
                            }`} onClick={() => setCard('virtual')} >
                            <img className='atm2' src={card2} alt="..." />
                            {card === 'virtual' ?
                                <img className='slct_tick' src={mode === 'dark' ? slct : slctL} alt="..." />
                                : null
                            }
                        </div>
                        <p>MTN Money</p>
                    </div>
                </div>
                <div className="tick_sign_div">
                    <div
                        className={
                            mode === 'light' ? "selecr_card_select payment_method_inp"
                                :
                                'payment_method_inp selecr_card_select dark_slct'
                        }>
                        <img src={mode==='dark'? user:userL} alt="..." />
                        <input type="text" placeholder='Email address/Phone number' />
                    </div>
                    <img src={tick} alt="..." />
                </div>
                <div className="tick_sign_div">
                    <div className={
                            mode === 'light' ? "selecr_card_select payment_method_inp"
                                :
                                'payment_method_inp selecr_card_select dark_slct'
                        }>
                        <img src={mode==='dark'? user:userL} alt="..." />
                        <input type="text" placeholder='Password' />
                    </div>
                    <img src={tick} alt="..." />
                </div>

            </div>
        </div>
    )
}

export default SelectPayment
