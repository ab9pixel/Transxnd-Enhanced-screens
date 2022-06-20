import React, {useState} from 'react'
import './styles.scss'
import Button from '../SimpleButton'
import CollectionPoint from '../CollectionPoint'
const SupportMessage = ({buttonLink, transferDetails, reviewPayment, setReviewPayment, setCollectionPoint, collectionPoint, setTransferDetails, paymentMethod, setPaymentMethod}) => {
  const backScreenHandler = () => {

  }
  

  return (
    <div className='support-message'>
        <div className='flex flex-between items-center'><p>
         Have a problem? Contact <span>Customer Support Team</span></p>
          {
            buttonLink ? (<div className="action-btns">
          <Button className='green med m-right-15' onClick={backScreenHandler} text = "Back" />
          <Button className='sea-green-hollow med' onClick={()=>{
           collectionPoint?setTransferDetails(true):
           paymentMethod?setCollectionPoint(true):
           reviewPayment?setPaymentMethod(true):
           setReviewPayment(true)
          }} text = "Continue" />
            </div>) : null
          }

        </div>
    </div>
  )
}

export default SupportMessage