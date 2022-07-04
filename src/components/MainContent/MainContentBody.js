import React, { useState } from "react";
import "./styles.scss";
import MoneyCalculator from "./MoneyCalculator";
import InnerSidebar from "../InnerSidebar";
import InnerContent from "../InnerContent";
import SupportMessage from "../SupportMessage";
const MainContentBody = () => {
  const [progress, setProgress] = useState(0);
  const [sendMoneyNow, setSendMoneyNow] = useState(false);
  const [addedBen, setAddedBenData] = useState(false)
  const [collectionPoint, setCollectionPoint] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(false);
  const [transferDetails, setTransferDetails] = useState(false);
  const [reviewPayment, setReviewPayment] = useState(false);
  console.log("sfsd", progress)
  return (
    <div className="MainContentBody">
      <div className="MainContentBodyWrap">
        {/* TEST CODE */}
        {/* END TEST CODE */}
        {!sendMoneyNow ? (
          <MoneyCalculator setSendMoneyNow={setSendMoneyNow} />
        ) : (
          <div className="SendMoneyWrap">
            <InnerSidebar
              progress={progress}
              setProgress={(val) => {
                setProgress(val);
              }}
            />
            <InnerContent
              progress={progress}
              reviewPayment={reviewPayment}
              setAddedBenData={(val) => setAddedBenData(val)}
              transferDetails={transferDetails}
              setProgress={(val) => {
                setProgress(val);
              }}
              collectionPoint={collectionPoint}
              paymentMethod={paymentMethod}
            />
          </div>
        )}
        <SupportMessage
          progress={progress}
          setProgress={(val) => {
            setProgress(val);
          }}
          addedBen={addedBen}
          setAddedBenData={(val) => setAddedBenData(val)}
          transferDetails={transferDetails}
          reviewPayment={reviewPayment}
          setReviewPayment={(val) => setReviewPayment(val)}
          setTransferDetails={(val) => {
            setTransferDetails(true);
          }}
          collectionPoint={collectionPoint}
          setCollectionPoint={(val) => setCollectionPoint(val)}
          paymentMethod={paymentMethod}
          setPaymentMethod={(val) => {
            setPaymentMethod(val);
          }}
        />
      </div>
    </div>
  );
};

export default MainContentBody;
