import React from "react";
import Button from "./Button";
import "./styles.scss";
import allActions from '../../actions'
import {useSelector} from 'react-redux';
const MainContentHeader = () => {
  const darkMode = useSelector(state=>state.themeActions.darkMode)
  const rateButton = "../images/awesome-calculator.svg";
  const mobileRateButton = "../images/mobile.calculator"
  return (
    <div className={`ContentHeader`}>
      <div className="ContentHeaderWrap">
        <div className="ContentHeaderText">
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.135"
                height="19.27"
                viewBox="0 0 11.135 19.27"
              >
                <path
                  id="Path_7610"
                  data-name="Path 7610"
                  d="M-23554.7,20389.861l-7.516,7.514,7.516,7.514"
                  transform="translate(23563.709 -20387.74)"
                  fill="none"
                  stroke={`${darkMode?'#27BDAD':'#000'}`}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
              </svg>
            </span>
          </div>
          <div>
            <h3>Send Money</h3>
            <p>
              Please fill out the form below to send money to your beneficiary.
              Fields marked with * are required.
            </p>
          </div>
        </div>
        <Button icon={rateButton} text="Rate calculator"/>
      </div>
    </div>
  );
};

export default MainContentHeader;
