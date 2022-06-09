import React, { useContext } from 'react'
// assets 
import license from '../../Assets/Group 4403.png'
import front from '../../Assets/Mask Group 10.png'
import upload from '../../Assets/Group 4482.png'
import { ColorContext } from '../../Context/Context'

const UploadLicns = ({className, head,sBtn,height }) => {
    const {color} = useContext(ColorContext)
    let {mode} = color
    return (
        <div>
            <div className={`personal_detail_container upload_img ${height} `}>
                {head ?
                    <>
                        <h6 style={{ color:mode==='light'? '#27BDAD':'#72FAEC' }}>PROOF OF VERFICATION</h6>
                        <div className='varify_para_div'>
                            <p style={{ color:mode==='light'? 'black':'white' }}>Please ensure that your profile data is correct and up-to-date before sending a
                            request for change. Invalid or incorrect information my lead to rejection of request
                        and account blockage!</p>
                        </div>
                    </>
                    :
                    null}
                <div className="email_input_perosnal">
                    <img src={license} alt="..." />
                    <select style={{color:mode==='light'?'':'white'}} name="" id="">
                        <option value="">Driver's License</option>
                    </select>
                </div>
                <div className="upload_imgs_divs">
                    <div className={`front_upload_div ${className}`}>
                        <p style={{ color:mode==='light'? '#27BDAD':'white' }}>FRONT IMAGE</p>
                        <img src={front} alt="..." />
                        <br />
                        <button>Remove image</button>
                    </div>
                    <div className={`front_upload_div ${className}`}>
                        <p style={{ color:mode==='light'? '#27BDAD':'white' }}>BACK IMAGE</p>
                        <img src={upload} alt="..." />
                        <br />
                        <button>Remove image</button>
                    </div>
                </div>
            </div>
            {sBtn?
            <div className="btn_submit">
                <button 
                 style={{backgroundColor:mode==='light'?'':'#72FAEC',color:mode==='light'?'':'#000000'}}
                className='personal_cont_btn' 
                >Submit for verification</button>
            </div>
            :
            null
            }
        </div>
    )
}

export default UploadLicns
