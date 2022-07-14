import React, { useState } from "react";
import GreenFullButton from "../GreenFullButton/GreenFullButton";
import InnerContentHeader from "../InnerContentHeader";
import CreditDebitCardDetails from "./CreditDebitCardDetails";
import PaymentOptions from "./PaymentOptions";
import RadioMark from "../InnerSidebar/RadioMark";
import "./styles.scss";
import WalletAmount from "./WalletAmount";
import { useDispatch, useSelector } from "react-redux";

const checkbox = "../images/hollow-checkbox.svg";
const creditCardIcon = "../images/credit-card.svg";
const bankIcon = "../images/bank.svg";
const cardIcon = "../images/search.svg";
const transxndIcon = "../images/transxnd.svg";
const spinnerImage = "../images/spinner-image.svg";
const warningAlert = "../images/warning.svg";
const masterCard = "../images/masterCard.png";

const PaymentMethod = () => {
  const [saveCard, setSaveCard] = useState(false);
  const [countryFlag, setCountyFlag] = useState("usd");
  const flag = `../images/${countryFlag}.png`;
  const darkMode = useSelector((state) => state.themeActions.darkMode);
  const dispatch = useDispatch();
  const [clickedIndex, setClickedIndex] = useState("");
  const [creditCard, setCreditCard] = useState(false);
  const [creditCardFlage, setCreditCardFlage] = useState(false);
  const [transxndCard, setTransxndCard] = useState(1);

  const changeFlagHandler = (e) => {
    setCountyFlag(e.target.value);
  };
  const addCreditCard = () => { };
  const chooseCounty = () => { };

  const handleCheckButton = (ind) => {
    setClickedIndex(ind)
  }

  const handleCreditCard = () => {
    setCreditCard(!creditCard)
    setCreditCardFlage(true)
  }

  return (
    <div className={`payment-method ${darkMode ? "dark-mode" : ""} `}>
      <div className="payment-method-header">
        <InnerContentHeader text="Select a payment method" />
        <p>Select how'd you like to pay for this translation!</p>
      </div>
      <div className="payment-body">
        <div className="payment-body-left">
          {
            [{ text: "Credit/Debit Card", icon: creditCardIcon }, { text: "Tranxnd Wallet", icon: transxndIcon }, { text: "Bank Account", icon: bankIcon }].map((item, ind) => {
              return (
                <PaymentOptions
                  text={item.text}
                  methodOptionIcon={item.icon}
                  index={ind} Click={() => handleCheckButton(ind)} clickedIndex={clickedIndex}
                />
              )
            })
          }

        </div>
        <div className="payment-body-right">
          {
            clickedIndex == 0 ?

              creditCardFlage ?
                <div className='credit-form'>
                  <div className='credit-form-header'>
                    <p>Credit/Debit Card</p>
                  </div>
                  <div className='beneficiary-input-fields'>

                    <input type="text" placeholder="Card Number" name="name" />
                    <div className="credit-card-fileds">
                      <input type="text" placeholder="Expiry Date" name="name" />

                      <input type="text" placeholder="CVV" name="name" />

                    </div>
                    <input type="text" placeholder="Cardholder Name" name="name" />
                    <div className="credit-card-fileds">
                      <input type="text" placeholder="Country" name="name" />

                      <input type="text" placeholder="ZIP COde" name="name" />

                    </div>
                    <button className='credit-option' onClick={handleCreditCard}>
                      <div className='checkbox-wrap'>
                        <div className={creditCard ? "filledBox" : "emptyBox"}></div>
                        <p >
                          Save card information for future payments
                        </p>
                      </div>

                    </button>

                  </div>
                </div>
                :
                <div className="wallet-response">
                  <h5>Credit/Debit Card</h5>
                  <div className="credit-card-wrapper">
                    <button className='payment-option' onClick={handleCreditCard}>
                      <div className='checkbox-wrap'>
                        <div className={creditCard ? "filledBox" : "emptyBox"}></div>
                        <div className="credit-cart-content-wrapper">
                          <p className="card-details-span">
                            XXXX-XXXX-XXXX-9360
                          </p>
                          <div className="credit-cart-span-wrapper">
                            <div className="credit-cart-span">
                              <span className="credit-card-span">Expiry Date</span>
                              <span className="credit-card-span">Salman Altaf</span>
                            </div>
                            <div className='credit-card-img'>
                              <img src={masterCard} alt="creditCardIcon err" />
                            </div>
                          </div>
                        </div>
                      </div>

                    </button>

                    <div className="credit-card-button">
                      <GreenFullButton style={{ width: "90%", margin: "0 auto" }}>
                        Add a new credit/debit card
                      </GreenFullButton>
                    </div>

                  </div>
                </div>
              :
              clickedIndex == 1 ?
                transxndCardSwtich(transxndCard, setTransxndCard)
                : null
          }
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;


const transxndCardSwtich = (transxndCard, setTransxndCard) => {
  switch (transxndCard) {
    case 1:
      return (
        <div className='credit-form' onClick={() => setTransxndCard(2)}>
          <div className='credit-form-header'>
            <p>Transxnd Wallet</p>
          </div>
          <div className="wallet-wrapper">
            <div>
              <img src={spinnerImage} />
            </div>
            <p>Please wait while we process your information</p>
          </div>

        </div>
      );
    case 2:
      return (
        <div className='credit-form' onClick={() => setTransxndCard(3)}>
          <div className='credit-form-header'>
            <p>Transxnd Wallet</p>
          </div>
          <div className="wallet-wrapper">
            <div className="wallet-content">
              <p>Current Balance</p>
              <span>XOF 104,535.53</span>
            </div>
            <div className="wallet-content">
              <p>Transaction Amount</p>
              <span>XOF 4,500.00</span>

            </div>
          </div>

        </div>
      );
    case 3:
      return (
        <div className="wallet-response">
          <h5>Tranxnd Wallet</h5>
          <div className="wallet-resonse-img">
            <img src={warningAlert} alt="warningAlert" />
          </div>
          <p className="warning-message">Insufficient Wallet allowance:</p>
          <p className="response-para">
            The source wallet maximum balance will not be enough to pay for
            this transaction even if you transfer funds into it.
          </p>
          <p className="response-para">
            Please select a different payment method or reduce the transaction
            amount to continue with the current source wallet.
          </p>
          <div className="response-balance-amount">
            <WalletAmount
              text="Current Balance"
              amount="XOF 104,535.53"
              marginBottom="23px"
              color="#FA7272"
              fontSize="22px"
            />
            <WalletAmount
              text="Transaction Amount"
              amount="XOF 4,500.00"
              marginBottom="23px"
              color="#27BDAD"
              fontSize="22px"
            />
          </div>
          <GreenFullButton style={{ width: "90%", margin: "0 auto" }}>
            Fund your transxnd wallet
          </GreenFullButton>
        </div>
      );
  }
}
