import React, { useContext } from "react";
import { ColorContext } from "../../Context/Context";

import { Link, useHistory } from "react-router-dom";

import userprofileimg from "../../Assets/userprofileimg.png";
import downicon from "../../Assets/downicon.png";

const UserDropdown = ({ logout }) => {
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
    bglightgreen: "#0E2725",
  };
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="dropdown userinfo_dropdown">
        <div className="userinfo_text">
          <h2
            style={{
              color: mode === "light" ? style.bggreen : style.bgdarkgreen,
            }}
          >
            Salman Altaf
          </h2>
          <span
            style={{
              color: mode === "light" ? style.bgblack : style.bgwhite,
            }}
          >
            salmanaltaf@gmail.com
          </span>
        </div>
        <button
          className="btn userdrpdwn_btn dropdown-toggle d-flex"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img className="usericon" src={userprofileimg} alt="img" />
          <img className="downicon" src={downicon} alt="img" />
        </button>

        <ul
          className="dropdown-menu userdrpdwn_menu"
          aria-labelledby="dropdownMenuButton1"
        >
          <div className="userdrpdwn_content">
            <img className="usericon" src={userprofileimg} alt="img" />
            <div className="userinfo_text">
              <h2>Salman Altaf</h2>
              <span className="text_darkgray">salmanaltaf@gmail.com</span>
            </div>
            <hr />
            <button
              onClick={() => history.push("/")}
              className="text_bluegreen bg_white border_solid bluegreen_border"
            >
              Home
            </button>
            {/* <button
              onClick={() => history.push("/post-survey-tamplate")}
              className="text_bluegreen bg_white border_solid bluegreen_border"
            >
              Post a survey
            </button> */}
            <Link to="account-overview" className="list-style-none">
              <button className="text_bluegreen bg_white border_solid bluegreen_border">
                Profile
              </button>
            </Link>
            {/* <button
              onClick={() => history.push("/account-setting")}
              className="text_bluegreen bg_white border_solid bluegreen_border"
            >
              Account Settings
            </button> */}
            <button
              onClick={logout}
              className="text_bluegreen bg_white border_solid bluegreen_border"
            >
              Logout
            </button>
          </div>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default UserDropdown;
