import React, { useContext, useState } from 'react'
// asstes 
import card1 from '../../Assets/Asset 1.png'
import card2 from '../../Assets/Mask Group 7.png'
import user from '../../Assets/Group 4244.png'
import userD from '../../Assets/Group 4244d.png'
import alert from '../../Assets/Group 4651.png'
import slct from '../../Assets/Group 4580 dark.png'
import slctL from '../../Assets/Group 4580.png'
import loc from '../../Assets/Group 4607.png'
import { ColorContext } from '../../Context/Context'

const SelectCard = () => {
    const { color } = useContext(ColorContext)
    let { mode } = color
    let [card, setCard] = useState('')
    return (
        <div className='select_card_container'>
            <h6>SELECT A CARD TYPE</h6>
            <div className="card_veriety_div">
                <div className="atm_cards">
                    <label htmlFor="b-1">
                        <div className={`card_img_atm atm1_div 
                        ${card === 'gm' ?
                                mode === 'dark' ?
                                    'active' : 'active2'
                                :
                                ''
                            }
                        `}
                            onClick={() => setCard('gm')} >
                            <img className='atm1' src={card1} alt="..." />
                            {card === 'gm' ?
                                <img className='slct_tick' src={mode === 'dark' ? slct : slctL} alt="..." />
                                : null
                            }
                        </div>
                    </label>
                    <p>GM</p>
                </div>
                <div className="atm_cards">
                    <label htmlFor="b-2" >
                        <div className={`card_img_atm ${card === 'master' ?
                            mode === 'dark' ?
                                'active' : 'active2'
                            :
                            ''
                            }
                        `} onClick={() => setCard('master')} >
                            <img className='atm2' src={card2} alt="..." />
                            {card === 'master' ?
                                <img className='slct_tick' src={mode === 'dark' ? slct : slctL} alt="..." />
                                : null
                            }
                        </div>
                    </label>
                    <p>Master Card</p>
                </div>
                <div className="atm_cards">
                    <div className={`card_img_atm ${card === 'virtual' ? 
                            mode === 'dark' ?
                                'active'
                                :
                                'active2'
                            :
                            ''
                        }
                        `} onClick={() => setCard('virtual')} >
                        <img className='atm2' src={card2} alt="..." />
                        {card === 'virtual' ?
                            <img className='slct_tick' src={mode === 'dark' ? slct : slctL} alt="..." />
                            : null
                        }
                    </div>
                    <p>Master Card Virtual</p>
                </div>
            </div>
            <div className={mode === 'dark' ? "selecr_card_select" : 'selecr_card_select_l'}>
                    <img src={mode==='dark'? loc:loc} alt="..." />
                <select name="" id="">
                    <option value="">Preffered City Of Delivery</option>
                </select>
            </div>
            <div className={mode === 'dark' ? "selecr_card_select" : 'selecr_card_select_l'}>
                    <img src={mode==='dark'? userD:user} alt="..." />
                <select name="" id="">
                    <option value="">Select Collection Agent</option>
                </select>
            </div>
            <div className="alert_div">
                <img src={alert} alt="..." />
                <span>Provide Phone Number Format </span>
            </div>
        </div>
    )
}

export default SelectCard
