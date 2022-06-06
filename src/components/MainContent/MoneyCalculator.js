import React, { useState } from "react";
import "./styles.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GreenFullButton from "../GreenFullButton/GreenFullButton";

const playIcon = "../images/playIcon.svg";
const upDownArrows = "../images/upDownArrows.svg";
const circle = "../images/circle.svg";

const MoneyCalculator = ({setSendMoneyNow}) => {
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

  const sendMoneyNow = () => {
    setSendMoneyNow(true);
  }
  return (
    <div className="MoneyCalculator">
      <Row>
        <Col lg={6}>
          <div className="sendMoneyPageOneLeft">
            <div className="contentBodyHeading">
              Send Money <span>fast, low-cost, convenient</span> across{" "}
              <span>Africa</span>
            </div>
            <div className="contentBodyPara">
              <p>
                Send money conveniently across africa in seconds with lowest
                charges starting at $2 per transaction. Calculate your
                transaction cost so you can make an informed decision!
              </p>
            </div>
            <div className="howToLink">
              <div className="playIcon">
                <img src={playIcon} alt="playIcon Err" />
              </div>
              <div className="playText">
                Watch how to send money in 1 Minute!
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="sendMoneyPageOneRight">
            <div className="transactionType">
              <h3>Transaction Type</h3>
            </div>
            <div className="transactionType">
              <div className="SmallInput">
                <div className="SmallInputWrap">
                  <input
                    type="checkbox"
                    name="cashCollection"
                    value={transactionType.cashCollection}
                    onClick={() => {}}
                  />
                  <p>Cash Collection</p>
                </div>
              </div>
              <div className="SmallInput">
                <div className="SmallInputWrap">
                  <input
                    type="checkbox"
                    name="utilityPayment"
                    value={transactionType.utilityPayment}
                    onClick={() => {}}
                  />
                  <p>Utility Payment</p>
                </div>
              </div>
              <div className="SmallInput">
                <div className="SmallInputWrap">
                  <input
                    type="checkbox"
                    name="mobileTransfer"
                    value={transactionType.mobileTransfer}
                    onClick={() => {}}
                  />
                  <p>Mobile Transfer</p>
                </div>
              </div>
            </div>
            <div className="transactionAmountWrap">
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
              </div>
              <div className="lineDiv">
                {convertedCurr ? (
                    <div className="chargesDetails">
                    <div className="chargesDetailsWrap">
                      <div className="chargesLines">
                        <div className="verticalLine" />
                        <div className="feeCharges">
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
                        <div className="verticalLine" />
                      </div>
                      <div className="chargesNames"></div>
                    </div>
                  </div>
                ) : (
                  <span/>
                )}
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
                  <select
                    value={currencyToName}
                    onChange={currencyToNameHandler}
                  >
                    <option value="usd">USD</option>
                    <option value="pkr">PKR</option>
                    <option value="usd">EUR</option>
                    <option value="pkr">GBP</option>
                  </select>
                </div>
              </div>
            </div>
            {convertedCurr && (
              <div className="infoNote">
                *Note: This is an indicative rate. The actual rate may vary
              </div>
            )}
            <GreenFullButton
              currenctConvert={!convertedCurr ? currenctConvert : sendMoneyNow}
              style={{ marginTop: convertedCurr ? "25px" : "134px" }}
            >
              {convertedCurr ? "Send Money Now" : "Calculator"}
            </GreenFullButton>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MoneyCalculator;
