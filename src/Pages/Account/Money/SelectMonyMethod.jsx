import React, { useContext, useLayoutEffect } from 'react'
import UserCard from '../../../Components/AccountComp/UserCard'
import { useHistory } from 'react-router-dom'
import card2 from '../../../Assets/Group 4569.png'
import wallet2 from '../../../Assets/Group 4574.png'
import cash2 from '../../../Assets/Group 4576.png'
import bank2 from '../../../Assets/Group 4579.png'
import card from '../../../Assets/money.png'
import wallet from '../../../Assets/money2.png'
import bank from '../../../Assets/bank.png'
import cash from '../../../Assets/cash.png'
import '../styles/Paybill.css'
import '../styles/Money.css'
import { ColorContext } from '../../../Context/Context'
import MobViewBack from '../../../Components/MobViewBack'

const SelectMonyMethod = () => {
    const { color } = useContext(ColorContext)
    let { mode } = color
    const history = useHistory()
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <div className="bak_div">
                <MobViewBack link='/' value='SEND MONEY' />
            </div>
            <div className="pay_bill_main_div dashboard_main">
                <div className="pay_user_card_div">
                    <UserCard />
                </div>
                <div className="select_bill_div" style={{ backgroundColor: mode === 'light' ? '#E9F8F7' : '#0E2725' }}>
                    <h4 style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>SEND MOENY</h4>
                    <p
                        style={{ color: mode === 'light' ? '' : 'white' }}
                    >Please enter recipient details!</p>
                    <div className="bill_type_select money_type_select" >
                        <div className="bil_type money_type">
                            <div className="_img_bill money_selct" style={{ border: '1px solid #27BDAD' }}>
                                <img className='light_bil' src={card} alt="..." />
                                <img className='hover_light_bil' src={card2} alt="..." />
                            </div>
                            <p style={{ color: mode === 'light' ? '' : 'white' }}>Card to Card Money <br /> Transfer</p>
                        </div>
                        <div className="bil_type money_type">
                            <div className="_img_bill money_selct" style={{ border: '1px solid #27BDAD' }}>
                                <img className='light_bil' src={wallet} alt="..." />
                                <img className='hover_light_bil' src={wallet2} alt="..." />

                            </div>
                            <p style={{ color: mode === 'light' ? '' : 'white' }}>Wallet to <br /> Wallet Money <br /> Transfer</p>
                        </div>
                        <div className="bil_type money_type">
                            <div className="_img_bill money_selct" style={{ border: '1px solid #27BDAD' }}>
                                <img className='light_bil' src={cash} alt="..." />
                                <img className='hover_light_bil' src={cash2} alt="..." />
                            </div>
                            <p style={{ color: mode === 'light' ? '' : 'white' }}>Cash <br /> Collection</p>
                        </div>
                        <div className="bil_type money_type">
                            <div className="_img_bill money_selct" style={{ border: '1px solid #27BDAD' }}>
                                <img className='light_bil' src={bank} alt="..." />
                                <img className='hover_light_bil' src={bank2} alt="..." />
                            </div>
                            <p style={{ color: mode === 'light' ? '' : 'white' }}>Bank <br /> Account</p>
                        </div>
                    </div>
                    <div className='abslt_btn_div'>
                        <button
                            className='back_btn'
                            style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC', border: '1px solid #27BDAD' }}
                        >Back</button>
                        <button
                            className='con_btn'
                            style={{ backgroundColor: mode === 'light' ? "#27BDAD" : '#72FAEC', color: mode === 'light' ? 'white' : 'black' }}
                            onClick={() => history.push('/bank_info')}
                        >Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectMonyMethod
