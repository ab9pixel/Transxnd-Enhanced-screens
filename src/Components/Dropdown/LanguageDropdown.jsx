import React, { useState, useContext } from "react";
import { ColorContext } from "../../Context/Context";

// import enFlag from "../../Assets/PNG/Landing Page/flag_en.png"
// import FR from "../../Assets/lang2.png";
import flag1 from "../../Assets/Mask Group 6.png";
import downicon from "../../Assets/downicon.png";
import path from "../../Assets/Path 7381.png";
// import { Icon } from "@iconify/react";
// import baselineKeyboardArrowDown from "@iconify-icons/ic/baseline-keyboard-arrow-down";

const LanguageDropdown = () => {
  const { color } = useContext(ColorContext);
  let { mode } = color;
  let style = {
    bggreen: "#27BDAD",
    bgblue: "#3C66C4",
    bgred: "#CF4332",
    bgblack: "#0E2725",
    bgwhite: "#FFFFFF",
    bgdarkgreen: "#72FAEC",
  };
  const [val, setVal] = useState("1");
  return (
    <React.Fragment>
      <div className="dropdown">
        <button
          className="btn lang_btn dropdown-toggle d-flex light_purple"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ color: mode === "light" ? style.bggreen : style.bgwhite,}}
        >
          {val === "1" ? (
            <div>
              <img src={flag1} alt="img" />
              <span className="ms-2">+92</span>
            </div>
          ) : val === "2" ? (
            <div>
              <img src={flag1} alt="img" />
              <span className="ms-2">+90</span>
            </div>
          ) : (
            <div>
              <img src={flag1} alt="img" />
              <span className="ms-2">+98</span>
            </div>
          )}
          <img src={downicon} alt="..." className="down_arrow" />

          <img
            className="path_line ms-3"
            style={{ height: "24px" }}
            src={path}
            alt="img"
          />

          {/* <Icon
            className="fs-5 down_arrow down_arrow_1"
            icon={baselineKeyboardArrowDown}
          /> */}
        </button>
        <ul
          className="dropdown-menu langdrpdwn_menu"
          aria-labelledby="dropdownMenuButton1"
        >
          <li
            onClick={() => {
              setVal("1");
            }}
          >
            <button className="lngdrpdwn_btn bg_lightgreen" type="button">
              <img src={flag1} alt="img" />
              <span>+92</span>
              {/* <Icon className="fs-5 down_arrow" /> */}
            </button>
          </li>
          <li
            onClick={() => {
              setVal("2");
            }}
          >
            <button
              className="lngdrpdwn_btn text_bluegreen border_solid bluegreen_border bg_white"
              type="button"
            >
              <img src={flag1} alt="img" />
              <span>+90</span>
              {/* <Icon className="fs-5 down_arrow" /> */}
            </button>
          </li>
          <li
            onClick={() => {
              setVal("3");
            }}
          >
            <button
              className="lngdrpdwn_btn text_bluegreen border_solid bluegreen_border bg_white"
              type="button"
            >
              <img src={flag1} alt="img" />
              <span>+98</span>
              {/* <Icon className="fs-5 down_arrow" /> */}
            </button>
          </li>
        </ul>
      </div>

      {/*     
      <li
        className="nav-item position_relative"
        onClick={() => {
          setVal("0");
        }}
      >
        <Link to="#" className="nav-link">
          <button className="dsadad">
            <img src={EN} alt="img" /> <span>EN</span>
            <Icon
              className="fs-5 down_arrow"
              icon={baselineKeyboardArrowDown}
            />
          </button>
        </Link>
        <div
          className="submenu .lang_submenu"
          style={{ display: val === "0" ? "block" : "none" }}
        >
          <ul className="submenu-item .lang_item text_lightgray">
            <h2>Select a Language</h2>
            <li className="nav-item">
              
              <button className="lngdrpdwn_btn">
                <img src={EN} alt="img" /> <span>EN</span>
                <Icon className="fs-5 down_arrow" />
              </button>
            </li>
            <li className="nav-item">
              <button className="lngdrpdwn_btn">
                <img src={FR} alt="img" /> <span>EN</span>
                <Icon className="fs-5 down_arrow" />
              </button>
            </li>
          </ul>
        </div>
      </li>
     */}
    </React.Fragment>
  );
};

export default LanguageDropdown;
