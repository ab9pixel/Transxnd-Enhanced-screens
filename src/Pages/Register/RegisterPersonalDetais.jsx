import React, { useState, useLayoutEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ColorContext } from "../../Context/Context";
// assets

import pwdopen from "../../Assets/pwdopen.png";
import pwdclose from "../../Assets/Component 37 – 5.png";
import featherMail from "../../Assets/feather-mail.png";
import featherLock from "../../Assets/feather-lock.png";
import userimg from "../../Assets/userimg.png";
import calendaricon from "../../Assets/calendaricon.png";
import locationimg from "../../Assets/locationimg.png";
import tick from "../../Assets/Path 7452.png";
import cross from "../../Assets/cross.png";
import validationIcon from "../../Assets/validationIcon.png";
// swiper js
import SwiperCore, { Pagination } from "swiper";
import RegisterContactDetails from "./RegisterContactDetails";
SwiperCore.use([Pagination]);

const RegisterPersonalDetais = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [pass, setPass] = useState(false);
  const [showComp, setShowComp] = useState(false);

  const showPassword = () => {
    setPass(!pass);
  };

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

  return (
    <React.Fragment>
      {showComp === false ? (
        <div className="login_form">
          <div className="s_form r_form">
            <div className="s_text">
              <h2
                className="mt-4"
                style={{
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                }}
              >
                Register with{" "}
                <strong
                  style={{
                    color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                  }}
                >
                  Transxnd!
                </strong>
              </h2>
            </div>
            <div className="s_para mt-3">
              <p
                style={{
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                }}
              >
                Verify that the information you provided is correct and click
                Submit to register.
              </p>
            </div>
            <h2
              className="fs-6 mt-5 mb-3"
              style={{
                color: mode === "light" ? style.bggreen : style.bgdarkgreen,
              }}
            >
              Personal Details
            </h2>
            <form className="s_form_fields">
              <div className="inline_input">
                <div
                  className="p_input"
                  style={{ width: "43%" }}
                >
                  <img src={userimg} alt="..." />
                  <input
                    style={{
                      paddingLeft: "15px",
                      color: mode === "light" ? style.bggreen : style.bgwhite,
                      opacity: mode === "light" ? 1 : 0.9,
                    }}
                    placeholder="First Name"
                    type="text"
                    className="half_input"
                  />
                </div>
                <div
                  className="p_input"
                  style={{ width: "48%" }}
                >
                  <img src={userimg} alt="..." />
                  <input
                    style={{
                      paddingLeft: "15px",
                      color: mode === "light" ? style.bggreen : style.bgwhite,
                      opacity: mode === "light" ? 1 : 0.9,
                    }}
                    placeholder="Last Name"
                    type="text"
                    className="half_input"
                  />
                </div>
                <img className="tick_img" src={tick} alt="..." />
              </div>
              <div className="inline_input">
                <div className="p_input" style={{ width: "93%" }}>
                  <img src={locationimg} alt="..." />
                  <input
                    style={{
                      color: mode === "light" ? style.bggreen : style.bgwhite,
                      opacity: mode === "light" ? 1 : 0.9,
                    }}
                    placeholder="Enter Date"
                    type="text"
                  />
                  <img src={calendaricon} alt="img" />
                </div>
                <img className="tick_img" src={tick} alt="..." />
              </div>
              <div className="inline_input">
                <div className="p_input" style={{ width: "93%" }}>
                  <img src={featherMail} alt="..." />
                  <input
                    style={{
                      paddingLeft: "15px",
                      color: mode === "light" ? style.bggreen : style.bgwhite,
                      opacity: mode === "light" ? 1 : 0.9,
                    }}
                    placeholder="Email address"
                    type="email"
                  />
                </div>
                <img className="tick_img" src={tick} alt="..." />
              </div>
              <div className="inline_input">
                <div
                  className="p_input"
                  style={{
                    width: "93%",
                    border: "1px solid",
                    borderColor: style.bgred,
                  }}
                >
                  <img src={featherLock} alt="..." />
                  <input
                    style={{
                      color: style.bgred,
                      opacity: mode === "light" ? 1 : 0.9,
                    }}
                    placeholder="Password"
                    type={!pass ? "password" : "text"}
                  />
                  {!pass ? (
                    <img onClick={showPassword} src={pwdopen} alt="img" />
                  ) : (
                    <img onClick={showPassword} src={pwdclose} alt="img" />
                  )}
                </div>
                <img className="tick_img" src={cross} alt="..." />
              </div>
              <div className="inline_input">
                <div
                  className="p_input"
                  style={{
                    width: "93%",
                    border: "1px solid",
                    borderColor: style.bgred,
                  }}
                >
                  <img src={featherLock} alt="..." />
                  <input
                    style={{
                      color: style.bgred,
                    }}
                    placeholder="Confirm Password"
                    type={!pass ? "password" : "text"}
                  />
                  {!pass ? (
                    <img onClick={showPassword} src={pwdopen} alt="img" />
                  ) : (
                    <img onClick={showPassword} src={pwdclose} alt="img" />
                  )}
                </div>
                <img className="tick_img" src={cross} alt="..." />
              </div>
              <div className="validation_text">
                  <img src={validationIcon} alt="..." />
                  <span style={{color:style.bgred}}>Password does't match Please reenter!</span>
              </div>

              <div className="form_btn mt-5">
                <button
                  onClick={() => {
                    setShowComp(true);
                  }}
                  style={{
                    padding: "8px 50px",
                    border: "1px solid",
                    backgroundColor:
                      mode === "light" ? style.bggreen : style.bgdarkgreen,
                    color: mode === "light" ? style.bgwhite : style.bgblack,
                  }}
                  className={`cus_btn1
                  ${mode === "light" ? "s_btn_light" : "s_btn_dark"}`}
                >
                  Next
                </button>
              </div>
              <span
                className="s_label mt-4"
                style={{
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                }}
              >
                Already a member?{" "}
                <Link
                  style={{
                    color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                  }}
                  to="/login"
                >
                  &nbsp;Login
                </Link>
              </span>
            </form>
          </div>
        </div>
      ) : (
        <RegisterContactDetails />
      )}
      {/* </div> */}
    </React.Fragment>
  );
};

export default RegisterPersonalDetais;
