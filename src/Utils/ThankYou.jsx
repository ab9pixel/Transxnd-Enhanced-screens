import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import thankyou from '../Assets/Group 4361d.png'
import thankyouL from '../Assets/Group 4361l.png'
import { ColorContext } from '../Context/Context'

const ThankYou = ({btnV,link,success}) => {
    const {color} = useContext(ColorContext)
    let {mode} = color
    const history = useHistory()
    return (
        <div>
            <div className="thankyou_main_div" style={{ backgroundColor: mode === 'light' ? '#E9F8F7' : '#0E2725' }}>
                <div>
                    <img className='thanks_img' src={mode==='dark'? thankyou:thankyouL} alt="..."/>
                    <h5 style={{ color:mode==='light'? '#27BDAD':'white' }}>Thank You</h5>
                    <p  style={{ color: mode === 'light' ? 'black' : 'white' }}>{success}</p>
                    <button 
                    className='con_btn proced' 
                    onClick={()=>history.push(link)}
                    style={{ backgroundColor: mode === 'light' ? "#27BDAD" : '#72FAEC', color: mode === 'light' ? 'white' : 'black' }}
                    >{btnV}</button>

                </div>
            </div>
        </div>
    )
}

export default ThankYou
