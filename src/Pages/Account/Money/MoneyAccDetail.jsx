import React, { useContext, useLayoutEffect } from 'react'
import UserCard from '../../../Components/AccountComp/UserCard'
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
// assets 
import home from '../../../Assets/Group 4480.png'
import user from '../../../Assets/Group 4244.png'
import tick from '../../../Assets/Path 7452.png'
import email from '../../../Assets/Icon feather-mail.png'
import { ColorContext } from '../../../Context/Context';
import { useHistory } from 'react-router';
import MobViewBack from '../../../Components/MobViewBack';

const GreenRadio = withStyles({
    root: {
        color: '#27BDAD',
        '&$checked': {
            color: '#27BDAD',
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);


const MoneyAccDetail = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const { color } = useContext(ColorContext)
    let { mode } = color
    const history = useHistory()
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <React.Fragment>
            <div className="bak_div">
                <MobViewBack link='/select-bank' value='SEND MONEY' />
            </div>
            <div className='money_detail_container'>
                <div className="user_card_div">
                    <UserCard />
                </div>
                <div className="money_detail_inputs_div" style={{ backgroundColor: mode === 'light' ? '#E9F8F7' : '#0E2725' }}>
                    <h4 style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>SEND MOENY</h4>
                    <p style={{ color: mode === 'light' ? '' : 'white' }}>Please enter recipient details!</p>
                    <div className={mode === 'light' ? "input_money_acc" : 'input_money_acc input_money_acc_D'}>
                        <div className="tick_sign money_info">
                            <div className="country_input_slct">
                                <label htmlFor="loc"><img src={home} alt="..." />
                                    <select name="loc" id="loc">
                                        <option value="">Recipient Bank Name</option>
                                    </select>
                                </label>
                            </div>
                            <img src={tick} alt="..." />
                        </div>
                        <div className="tick_sign money_info">
                            <div className="country_input_slct">
                                <label htmlFor="loc"><img src={user} alt="..." />
                                    <input type="text" placeholder='Recipient Account Number' />
                                </label>
                            </div>
                            <img src={tick} alt="..." />
                        </div>
                        <div className="account_formate_div" style={{ color: mode === 'light' ? '' : 'white' }}>
                            <p className='formate_note'>Account Number formats</p>
                            <p className='acc_no'>IBAN: 1234-5678-1234-5678</p>
                            <p>IBAN: ABCD-5678-1234-ABCD</p>
                        </div>
                        <div className="tick_sign money_info">
                            <div className="country_input_slct">
                                <label htmlFor="loc"><img src={email} alt="..." />
                                    <input type="text" placeholder='Recipient Email Address (Optional)' />
                                </label>
                            </div>
                            <img src={tick} alt="..." />
                        </div>
                        <div className="tick_sign money_info">
                            <div className="country_input_slct">
                                <label htmlFor="loc"><img src={user} alt="..." />
                                    <input type="text" placeholder='Recipient Nick Name (Optional)' />
                                </label>
                            </div>
                            <img src={tick} alt="..." />
                        </div>
                        <div className="radio_div">
                            <GreenRadio
                                checked={selectedValue === 'c'}
                                onChange={handleChange}
                                value="c"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'C' }}
                            />
                            <p style={{ color: mode === 'light' ? 'black' : 'white' }}>Refer this recipient to Transxnd!</p>
                        </div>
                        <div style={{ marginTop: '20px' }} >
                            <button
                                className='back_btn'
                                onClick={() => history.push('/select-bank')}
                                style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC', border: '1px solid #27BDAD' }}
                            >Back</button>
                            <button
                                className='con_btn'
                                style={{ backgroundColor: mode === 'light' ? "#27BDAD" : '#72FAEC', color: mode === 'light' ? 'white' : 'black' }}
                                onClick={() => history.push('/money-detail')}
                            >Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MoneyAccDetail
