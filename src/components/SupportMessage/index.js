import React from "react";
import "./styles.scss";
import Button from "../SimpleButton";
const SupportMessage = ({
  progress,
  setProgress,
  addedBen,
  transferDetails,
  reviewPayment,
  setReviewPayment,
  setCollectionPoint,
  collectionPoint,
  setTransferDetails,
  paymentMethod,
  setPaymentMethod,
}) => {
  const backScreenHandler = () => { };

  const handleCollectionPoint = () => {
    setCollectionPoint(true)
    setProgress(progress + 1)
  }
  const handleTransferDetails = () => {
    setTransferDetails(true)
    setProgress(progress + 1)
  }
  const handlePaymentMethod = () => {
    setPaymentMethod(true)
    setProgress(progress + 1)
  }
  const handleReviewPayment = () => {
    setReviewPayment(true);
     setProgress(progress + 1)  
  }

  return (
    <div className="support-message">
      <div className="flex flex-between items-center">
        <p>
          Have a problem? Contact <span>Customer Support Team</span>
        </p>
        {addedBen && !reviewPayment &&
          <div className="action-btns">
            <Button
              className="green med m-right-15"
              onClick={backScreenHandler}
              text="Back"
            />
            <Button
              className="sea-green-hollow med"
              onClick={() => {
                !collectionPoint
                  && !transferDetails ? handleTransferDetails()
                  :
                  !paymentMethod
                    && !collectionPoint ? handleCollectionPoint()
                    : !reviewPayment
                      && !paymentMethod ? handlePaymentMethod()
                      : handleReviewPayment()
              }}
              text="Continue"
            />
          </div>
        }
      </div>
    </div>
  );
};

export default SupportMessage;
