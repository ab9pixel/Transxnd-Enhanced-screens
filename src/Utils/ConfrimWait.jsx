import React, { useContext, useState } from "react";
import edit from "../Assets/Icon awesome-edit.png";
import editD from "../Assets/Icon awesome-edit.png";
import loader1L from "../Assets/loader1L.png";
import loader2L from "../Assets/loader2L.png";
import loaderd1 from "../Assets/loaderd1.png";
import loaderd2 from "../Assets/loaderd2.png";

import { ColorContext } from "../Context/Context";
import "./style/otp.css";

const ConfrimWait = ({number}) => {
  let [load, setLoad] = useState(false);
  const { color } = useContext(ColorContext);
  let { mode } = color;

  setInterval(() => {
    setLoad(!load);
  }, 1000);

  return (
    <div>
      <div
        className="confirm_opt_main_div"
        style={{ backgroundColor: mode === "light" ? "#E9F8F7" : "#0E2725" }}
      >
        <h4 style={{ color: mode === "light" ? "#27BDAD" : "#72FAEC" }}>
          CONFIRM OTP
        </h4>
        <p style={{ color: mode === "light" ? "black" : "white" }}>
          Please enter the 4 digit OPT sent on your email and phone number!
        </p>
        <div
          className="number_div"
          style={{ color: mode === "light" ? "#27BDAD" : "#72FAEC" }}
        >
          <span>{number}</span>
          <img src={mode === "light" ? edit : editD} alt="..." />
        </div>
        <div
          className="wating_animation d-flex flex-column align-items-center mt-5"
          style={{ height: "70px" }}
        >
          {mode === "light" ? (
            <img src={load ? loader1L : loader2L} alt="..." />
          ) : (
            <img src={load ? loaderd1 : loaderd2} alt="..." />
          )}
        </div>
        <div>
          <p
            className="mt-3"
            style={{ color: mode === "light" ? "black" : "white" }}
          >
            Please wait while we process your information
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfrimWait;
