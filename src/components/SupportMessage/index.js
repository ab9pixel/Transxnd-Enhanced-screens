import React from "react";
import "./styles.scss";
import Button from "../SimpleButton";
const SupportMessage = ({
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
  const backScreenHandler = () => {};

  return (
    <div className="support-message">
      <div className="flex flex-between items-center">
        <p>
          Have a problem? Contact <span>Customer Support Team</span>
        </p>
        {addedBen &&  !reviewPayment &&
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
                  && !transferDetails ? setTransferDetails(true)
                  :
                   !paymentMethod 
                  && !collectionPoint ? setCollectionPoint(true)                
                  :  !reviewPayment
                  && !paymentMethod ? setPaymentMethod(true)
                  : setReviewPayment(true);
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
