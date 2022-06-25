import React, { useState } from "react";
import AddBeneficiary from "../AddBeneficiary";
import BeneficiaryForm from "../AddBeneficiary/BeneficiaryForm";
import "./styles.scss";
import data from "./data.json";
import { useDispatch, useSelector } from "react-redux";
import TransferDetails from "../TransferDetails";
import CollectionPoint from "../CollectionPoint";
import PaymentMethod from "../PaymentMethod";
import ReviewPayment from "../ReviewPayment";
import OtpConfirmation from "../OtpConfirmation";
const InnerContent = ({
  setAddedBenData,
  collectionPoint,
  transferDetails,
  paymentMethod,
  reviewPayment,
}) => {
  const darkMode = useSelector((state) => state.themeActions.darkMode);
  const dispatch = useDispatch();
  const [addBen, setAddBen] = useState(false);
  const [ben, setBen] = useState(false);
  const [addBenData, setAddBenData] = useState(false);
  const [otp, setOtp] = useState(false);

  if (ben) {
    setAddedBenData("transaction");
  }
  return (
    <div className={`inner-content ${darkMode ? "dark-mode" : ""} `}>
      {/***************** test code start */}
      {/* <OtpConfirmation/> */}
      {/* <ReviewPayment/> */}
      {/* <PaymentMethod /> */}
      {/* <CollectionPoint /> */}
      {/* <TransferDetails/> */}
      {/*****************  test code end */}
      {!addBen ? (
        <AddBeneficiary
          setAddBen={(val) => {
            setAddBen(val);
          }}
        />
      ) : !ben ? (
        <BeneficiaryForm
          setBen={(val) => {
            setBen(val);
          }}
        />
      ) : !collectionPoint ? (
        <AddBeneficiary
          data={data}
          addBenData={addBenData}
          setAddBenData={(val) => {
            setAddBenData(val);
          }}
        />
      ) : !transferDetails ? (
        <TransferDetails />
      ) : !paymentMethod ? (
        <CollectionPoint />
      ) : !reviewPayment ? (
        <PaymentMethod />
      ) : !otp ? (
        <ReviewPayment
          setOtp={(val) => {
            setOtp(val);
          }}
        />
      ) : (
        <OtpConfirmation />
      )}
    </div>
  );
};

export default InnerContent;
