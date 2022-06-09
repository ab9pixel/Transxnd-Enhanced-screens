import React, { useState, useContext } from "react";
import { ColorContext } from "../Context/Context";

import cokkie from "../Assets/Group 4235.png";
import crosslight from "../Assets/Group 4241.png";

const Cokkie = () => {
  const { color } = useContext(ColorContext);
  let { mode } = color;
  let style = {
    bggreen: "#27BDAD",
    bgblue: "#3C66C4",
    bglightblue: "#E9F8F7",
    bgred: "#CF4332",
    bgblack: "#0E2725",
    bgwhite: "#FFFFFF",
    bgdarkgreen: "#72FAEC",
    bglightgreen: "#244A46",
  };
  const [show, setShow] = useState(false);
  return (
    <div
      className="cokkie_main_div"
      style={{
        display: show === true ? "none" : "block",
        backgroundColor:
          mode === "light" ? style.bglightblue : style.bglightgreen,
        opacity: 0.6,
      }}
    >
      <div className="cokkie_div">
        <img
          style={{ display: show === true ? "none" : "block" }}
          className="cross_cookie"
          src={crosslight}
          alt="..."
          onClick={() => {
            setShow(true);
          }}
        />

        <img className="cokkie_img" src={cokkie} alt="..." />
        <div className="cokkie_para">
          <p
            style={{
              color: mode === "light" ? style.bglightgreen : style.bgwhite,
            }}
          >
            This site uses "cookies" that store login details only (no personal
            data is stored). Such cookies can be blocked using browser privacy
            settings, but this is not recommended. No action is required,
            continued use of this site constitutes your agreement to the use of
            these cookies.
          </p>
        </div>
        <div className="cokkie_btn_div">
          <button
            style={{
              border: "1px solid",
              borderColor: mode === "light" ? style.bggreen : style.bgdarkgreen,
            }}
            className={`cus_btn1
              ${mode === "light" ? "s_btn_light" : "s_btn_dark"}`}
            onClick={() => {
              setShow(true);
            }}
          >
            I Agree!
          </button>
          <button
            className={`cus_btn1
             ${mode === "light" ? "l_btn_light" : "l_btn_dark"}`}
            style={{
              border: "1px solid",
              backgroundColor: "transparent",
              borderColor: mode === "light" ? style.bggreen : style.bgdarkgreen,
              padding: "8px 28px",
            }}
            onClick={() => {
              setShow(true);
            }}
          >
            No I don't Agree!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cokkie;
