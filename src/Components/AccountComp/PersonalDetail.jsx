import React, { useContext } from "react";
// assets
import user from "../../Assets/Group 4244.png";
import userD from "../../Assets/Group 4244d.png";
import date from "../../Assets/Group 4243d.png";
import dateL from "../../Assets/Group 4243l.png";
import calender from "../../Assets/Icon feather-calendard.png";
import calenderL from "../../Assets/Icon feather-calendarl.png";
import email from "../../Assets/Icon feather-maild.png";
import emailL from "../../Assets/Icon feather-maill.png";
import loc from "../../Assets/Group 4230.png";
import locL from "../../Assets/Group 4607.png";
import phone from "../../Assets/Icon feather-smartphoned.png";
import phoneL from "../../Assets/Icon feather-smartphonel.png";
import { ColorContext } from "../../Context/Context";
import LanguageDropdown from "../Dropdown/LanguageDropdown";

const PersonalDetail = ({ nextFunc, head, height }) => {
  const { color } = useContext(ColorContext);
  let { mode } = color;
  return (
    <div>
      <div
        className={`personal_detail_container ${
          mode === "dark" ? "darK_input" : ""
        } ${height}`}
      >
        {head ? (
          <p style={{ color: mode === "light" ? "#27BDAD" : "#72FAEC" }}>
            PERSONAL DETAILS
          </p>
        ) : null}
        <div className="user_name_change_input_div">
          <div className="_name_change_div">
            <img src={mode === "light" ? user : userD} alt="..." />
            <input type="text" placeholder="First Name" />
          </div>
          <div className="_name_change_div">
            <img src={mode === "light" ? user : userD} alt="..." />
            <input type="text" placeholder="Last Name" />
          </div>
        </div>
        <div className="pass_inpt entr_link">
          <img src={mode === "dark" ? date : dateL} alt="..." />
          <input type="email" name="" placeholder="Date of birth" />
          <label htmlFor="date">
            <img src={mode === "dark" ? calender : calenderL} alt="..." />
          </label>
          <input
            type="date"
            style={{ display: "none" }}
            name="date"
            id="date"
          />
        </div>
        <div className="email_input_perosnal">
          <img src={mode === "dark" ? email : emailL} alt="..." />
          <input type="email" name="" placeholder="Email" />
        </div>
        {head ? (
          <p style={{ color: mode === "light" ? "#27BDAD" : "#72FAEC" }}>
            CONTACT DETAILS
          </p>
        ) : null}
        <div className="email_input_perosnal">
          <img src={mode === "dark" ? loc : locL} alt="..." />
          <select name="" id="">
            <option value="">Pakistan</option>
          </select>
        </div>
        <div className="email_input_perosnal d-flex align-items-center"
        style={{padding:"0px 15px"}}
        >
          <img src={mode === "dark" ? phone : phoneL} alt="..." />
          <LanguageDropdown 
          />
          <input type="text" placeholder='Number' 
          style={{paddingLeft:"0px"}}
          
          />
          {/* <select name="" id="">
            <option value={pakistan}>Pakistan</option>
          </select> */}
        </div>
      </div>
      {nextFunc ? (
        <div className="continue_btn_div">
          <button
            style={{
              backgroundColor: mode === "light" ? "" : "#72FAEC",
              color: mode === "light" ? "" : "#000000",
            }}
            className="personal_cont_btn"
            onClick={nextFunc}
          >
            Continue
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default PersonalDetail;
