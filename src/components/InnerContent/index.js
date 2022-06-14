import React, {useState}from 'react'
import AddBeneficiary from '../AddBeneficiary'
import BeneficiaryForm from '../AddBeneficiary/BeneficiaryForm'
import './styles.scss'
import data from './data.json';
import TransferDetails from '../TransferDetails';
import CollectionPoint from '../CollectionPoint';
import PaymentMethod from '../PaymentMethod';
import ReviewPayment from '../ReviewPayment';
const InnerContent = ({setAddedBenData, collectionPoint , transferDetails, paymentMethod}) => {
  const [addBen, setAddBen] = useState(false)
  const [ben, setBen] = useState(false)
  const [addBenData, setAddBenData] = useState(false)

  if(ben){
    setAddedBenData("transaction")
  }
  return (
    <div className="inner-content">
      {/***************** test code start */}
        <ReviewPayment/>
      {/*****************  test code end */}
      {!addBen?
      <AddBeneficiary setAddBen = {(val)=>{setAddBen(val)}}/>
    :!ben?
      <BeneficiaryForm setBen = {(val)=>{setBen(val)}} />
      :
      !collectionPoint?
      <AddBeneficiary data={data} addBenData = {addBenData} setAddBenData = {(val)=>{setAddBenData(val)}} />
        :!transferDetails?
        <TransferDetails />
      :!paymentMethod?
      <CollectionPoint />
      :
      <PaymentMethod />
      
      }
    </div>
  )
}

export default InnerContent