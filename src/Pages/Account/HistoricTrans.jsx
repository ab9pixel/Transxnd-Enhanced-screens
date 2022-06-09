import React, { useContext, useLayoutEffect } from 'react'
import { ColorContext } from '../../Context/Context'
import UserCard from '../../Components/AccountComp/UserCard'
import TransTable from '../../Components/AccountComp/TransTable'
import './styles/Historic.css'
import MobViewBack from '../../Components/MobViewBack'

const HistoricTrans = () => {
    const { color } = useContext(ColorContext)
    let { mode } = color

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
              <div className="bak_div">
                <MobViewBack link='/' value='YOUR TRANSCTIONS' />
            </div>
            <div className="historic_trans_main_div dashboard_main">
                <div className="user_historic_card">
                    <UserCard />
                </div>
                <div style={{ backgroundColor: mode === 'light' ? '#E9F8F7' : '#112626' }} className="transaction_table_div">
                    <div className="transaction_table_head">
                        <h5 style={{ color: mode === 'dark' ? 'white' : 'black' }}>YOUR TRANSACTION</h5>
                        <div className="select_transaction_div">
                            <select style={{
                                color: mode === 'light' ? '#27bdad' : '#72FAEC',
                                backgroundColor: mode === 'light' ? '#E9F8F7' : 'transparent',
                                border: `1px solid  ${mode === 'light' ? '#27BDAD' : '#72FAEC'}`
                            }}
                                name="" id="">
                                <option value="Card Transaction">Card Transaction</option>
                            </select>
                        </div>
                    </div>
                    <TransTable  className='table_scroll_hist'/>
                </div>
            </div>
        </div>
    )
}

export default HistoricTrans
