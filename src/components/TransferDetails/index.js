import React, { useState } from "react";
import InnerContentHeader from "../InnerContentHeader";
import "./styles.scss";
const infoCircle = "../images/info-circle.svg";
const upDownArrows = "../images/upDownArrows.svg";
const circle = "../images/circle.svg";

const TransferDetails = () => {
  const [radioActive, setRadioActive] = useState(null);
  const [transactionType, setTransactionType] = useState({
    cashCollection: false,
    utilityPayment: false,
    mobileTransfer: false,
  });
  const [transactionAmount, setTransactionAmount] = useState(null);
  const [currencyFromName, setCurrencyFromName] = useState("usd");
  const [currencyToName, setCurrencyToName] = useState("usd");
  const [fromCurrency, setFromCurrency] = useState(null);
  const [toCurrency, setToCurrency] = useState(null);
  const [convertedCurr, setConvertedCurr] = useState(false);

  const currencyFromFlag = `../images/${currencyFromName}.png`;
  const currencyToFlag = `../images/${currencyToName}.png`;

  const currencyFromNameHandler = (e) => {
    setCurrencyFromName(e.target.value);
  };
  const currencyToNameHandler = (e) => {
    setCurrencyToName(e.target.value);
  };

  const currenctConvert = () => {
    setConvertedCurr(true);
  };

  return (
    <div className="transfer-details">
      <div className="tranfer-detail-header">
        <InnerContentHeader text="Transfer Details" />
        <p>
          Select the type of transfer that you wish to send. You must have
          provided the relevant transfer type details for your beneficiary in
          order to use that transfer type. You can edit your beneficiary to add
          or update transfer type details.
        </p>
        <img src={infoCircle} alt="info Circle Err" />
      </div>
      <div className="transaction-form">
        <div className="transaction-left">
          <div className="transaction-form-header">
            <h3>Transaction Type</h3>
            <img src={infoCircle} alt="info circle err" />
          </div>
          <div className="transaction-type-form">
            <button onClick={() => setRadioActive("cash")}></button>
          </div>
        </div>
        <div className="transaction-right">
          <div className="transactionAmountWrap transaction-amount">
            <h3>Transaction Amount</h3>
            <div className="transactionAmount">
              <input
                text="number"
                name="transactionAmount"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              />
              <div className="currencyWrap">
                <img src={currencyFromFlag} alt="FlagError" />
                <select
                  value={currencyFromName}
                  onChange={currencyFromNameHandler}
                >
                  <option value="usd">USD</option>
                  <option value="pkr">PKR</option>
                  <option value="usd">EUR</option>
                  <option value="pkr">GBP</option>
                </select>
              </div>
              <span>You send</span>
            </div>
            <div className="lineDiv">
              <div className="chargesDetails">
                <div className="chargesDetailsWrap">
                  <div className="chargesLines">
                    <div className="verticalLine" />
                    <div className="feeCharges feeChargesAccepted">
                      <div className="upDownArrows">
                        <img src={upDownArrows} alt="Up Down Arrows Err" />
                      </div>
                      <p>Free Breakdown</p>
                    </div>
                    <div className="verticalLine" />
                    <div className="feeCharges">
                      <div className="cirlce">
                        <img src={circle} alt="circleError" />
                      </div>
                      <p>Fees plus Charges: USD 25.00</p>
                    </div>
                    <div className="verticalLine" />
                    <div className="feeCharges">
                      <div className="cirlce">
                        <img src={circle} alt="circleError" />
                      </div>
                      <p>Exchange Rate: 1</p>
                    </div>
                    <div className="verticalLine lastVerticalLine" />
                  </div>
                  <div className="chargesNames"></div>
                </div>
              </div>
            </div>
            <div className="transactionAmount">
              <input
                text="number"
                name="transactionAmount"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              />
              <div className="currencyWrap">
                <img src={currencyToFlag} alt="FlagError" />
                <select value={currencyToName} onChange={currencyToNameHandler}>
                  <option value="usd">USD</option>
                  <option value="pkr">PKR</option>
                  <option value="usd">EUR</option>
                  <option value="pkr">GBP</option>
                </select>
              </div>
              <span>Recipient get</span>
            </div>
          </div>
          <div className="infoNote">
            *Note: This is an indicative rate. The actual rate may vary
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferDetails;
