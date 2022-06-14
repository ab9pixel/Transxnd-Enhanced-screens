import React, {useState, useEffect} from 'react'
import {Accordion} from 'react-bootstrap'
import BeneficiaryCard from '../BeneficiaryCard'
import PaymentCard from '../PaymentMethod/PaymentCard'
import TransferCard from '../TransferDetails/TransferCard'
import RadioMark from './RadioMark'
import './styles.scss'

const usaFlag = '../images/usd.png';
const pakFlag = '../images/pkr.png';

const creditCard = '../images/credit-card.png'
const masterCard = '../images/masterCard.png'

export default function InnerSidebar({progress}) {
useEffect(()=>{
  const highlightedItems = document.querySelectorAll(".accordion .hollow");
  highlightedItems.forEach((disabledButton)=> {
    disabledButton.parentNode.parentNode.setAttribute('disabled', 'disabled')
});
document.querySelector('.accordion .in-progress')?.parentNode?.parentNode?.setAttribute('disabled', 'disabled')

},[])
  return (  <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" style={{ }}>
        <Accordion.Header>
        <span className="radio-mark">{ 
           progress>0? <RadioMark active={true} />
          : <RadioMark active={false} />
          } </span>
          Select Beneficiary
          <svg className='down-arrow' xmlns="http://www.w3.org/2000/svg" width="13.537" height="7.768" viewBox="0 0 13.537 7.768">
             <path id="Path_7708" data-name="Path 7708" d="M-14403.338,20463.662l5.354,5.354,5.354-5.354" transform="translate(14404.752 -20462.248)" fill="none" stroke="#27bdad" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          </svg>
          </Accordion.Header>
        <Accordion.Body>
          <BeneficiaryCard name="Hammad Imran" country = "Pakistan" card = "GIM CARD" />
        </Accordion.Body>
        
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
        <span className="radio-mark">  { 
           progress > 1? <RadioMark active={true} />
          : progress === 1 ? <RadioMark active={false} /> 
          :<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
            <g id="Group_4808" data-name="Group 4808" transform="translate(0.089 0.063)">
              <g id="Ellipse_1034" data-name="Ellipse 1034" transform="translate(-0.088 -0.063)" fill="rgba(114,250,236,0.05)" stroke="#72faec" stroke-width="2">
                <circle cx="7.5" cy="7.5" r="7.5" stroke="none"/>
                <circle cx="7.5" cy="7.5" r="6.5" fill="none"/>
              </g>
            </g>
          </svg>
          } </span>
          Transfer Details           
          <svg className='down-arrow' xmlns="http://www.w3.org/2000/svg" width="13.537" height="7.768" viewBox="0 0 13.537 7.768">
             <path id="Path_7708" data-name="Path 7708" d="M-14403.338,20463.662l5.354,5.354,5.354-5.354" transform="translate(14404.752 -20462.248)" fill="none" stroke="#27bdad" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          </svg></Accordion.Header>
        <Accordion.Body>
          <TransferCard 
            sendFlagImage={usaFlag}
            recipentFlagImage={pakFlag}
            sendAmount="1000"
            recipientAmount="18565"
            sendCurrency="USD"
            recipientCurrency="PKR"
          />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2"> 
        <Accordion.Header>
         <span className="radio-mark">   { 
              progress > 2? <RadioMark active={true} />
              : progress === 2 ? <RadioMark active={false} /> 
              :<svg className="hollow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                <g id="Group_4808" data-name="Group 4808" transform="translate(0.089 0.063)">
                  <g id="Ellipse_1034" data-name="Ellipse 1034" transform="translate(-0.088 -0.063)" fill="rgba(114,250,236,0.05)" stroke="#72faec" stroke-width="2">
                    <circle cx="7.5" cy="7.5" r="7.5" stroke="none"/>
                    <circle cx="7.5" cy="7.5" r="6.5" fill="none"/>
                  </g>
                </g>
              </svg>
              }</span> Collection Point
          <svg className='down-arrow' xmlns="http://www.w3.org/2000/svg" width="13.537" height="7.768" viewBox="0 0 13.537 7.768">
             <path id="Path_7708" data-name="Path 7708" d="M-14403.338,20463.662l5.354,5.354,5.354-5.354" transform="translate(14404.752 -20462.248)" fill="none" stroke="#27bdad" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          </svg>
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>       <span className="radio-mark">    { 
           progress > 3 ? <RadioMark active={true} />
          : progress === 3 ? <RadioMark active={false} /> 
          :<svg className="hollow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
            <g id="Group_4808" data-name="Group 4808" transform="translate(0.089 0.063)">
              <g id="Ellipse_1034" data-name="Ellipse 1034" transform="translate(-0.088 -0.063)" fill="rgba(114,250,236,0.05)" stroke="#72faec" stroke-width="2">
                <circle cx="7.5" cy="7.5" r="7.5" stroke="none"/>
                <circle cx="7.5" cy="7.5" r="6.5" fill="none"/>
              </g>
            </g>
          </svg>
          }</span> Payment Method
        <svg className='down-arrow' xmlns="http://www.w3.org/2000/svg" width="13.537" height="7.768" viewBox="0 0 13.537 7.768">
             <path id="Path_7708" data-name="Path 7708" d="M-14403.338,20463.662l5.354,5.354,5.354-5.354" transform="translate(14404.752 -20462.248)" fill="none" stroke="#27bdad" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          </svg>
        </Accordion.Header>
        <Accordion.Body>
          <PaymentCard 
            paymentImg={creditCard}
            cardNumber="XXXX-XXXX-XXXX-9360"
            expiryDate="Expiry Date"
            receipentName="Salman Altaf"
            cardImg={masterCard}
          />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header> <span className="radio-mark"> { 
           progress > 3 ? <RadioMark active={true} />
          : progress === 3 ? <RadioMark active={false} /> 
          :<svg className="hollow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
            <g id="Group_4808" data-name="Group 4808" transform="translate(0.089 0.063)">
              <g id="Ellipse_1034" data-name="Ellipse 1034" transform="translate(-0.088 -0.063)" fill="rgba(114,250,236,0.05)" stroke="#72faec" stroke-width="2">
                <circle cx="7.5" cy="7.5" r="7.5" stroke="none"/>
                <circle cx="7.5" cy="7.5" r="6.5" fill="none"/>
              </g>
            </g>
          </svg>
          }</span> Confirm Payment
        <svg className='down-arrow' xmlns="http://www.w3.org/2000/svg" width="13.537" height="7.768" viewBox="0 0 13.537 7.768">
             <path id="Path_7708" data-name="Path 7708" d="M-14403.338,20463.662l5.354,5.354,5.354-5.354" transform="translate(14404.752 -20462.248)" fill="none" stroke="#27bdad" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          </svg>
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
