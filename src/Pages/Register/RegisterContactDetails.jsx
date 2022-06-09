import React, { useState, useLayoutEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ColorContext } from "../../Context/Context";
import RegisterAlmostDone from "./RegisterAlmostDone";
import LanguageDropdown from "../../Components/Dropdown/LanguageDropdown";
// assets

import featherLock from "../../Assets/feather-lock.png";
import smartphone from "../../Assets/Icon feather-smartphone.png";
import locationimg from "../../Assets/locationimg.png";
import validationIcon from "../../Assets/validationIcon.png";
// swiper js
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);

const RegisterContactDetails = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [showComp, setShowComp] = useState(false);

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
          <div className="s_form">
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
                    color: style.bggreen,
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
                Please enter your email address and password to login..
              </p>
            </div>
            <h2
              className="fs-6 mt-5"
              style={{
                color: mode === "light" ? style.bggreen : style.bgdarkgreen,
              }}
            >
              Contact Details
            </h2>

            <form className="s_form_fields">

              <div className="p_input">
                <img src={locationimg} alt="..." />
                <select
                  className="cus_select"
                  style={{
                    color: mode === "light" ? style.bggreen : style.bgwhite,
                    paddingLeft: "10px",
                  }}
                >
                  <option
                    style={{
                      color:
                        mode === "light" ? style.bggreen : style.bgdarkgreen,
                    }}
                    selected
                  >
                    Country of Residence
                  </option>
                  <option
                    style={{
                      color:
                        mode === "light" ? style.bggreen : style.bgdarkgreen,
                    }}
                    value="dasda"
                  >
                    option a
                  </option>
                </select>
              </div>


              <div className="p_input">
                <img src={smartphone} alt="..." />
                <LanguageDropdown />
                <input
                  style={{
                    paddingLeft: "0px",
                    color: mode === "light" ? style.bggreen : style.bgwhite,
                  }}
                  placeholder="Phone Number"
                  type="text"
                />
              </div>

              <div className="p_input">
                <img src={featherLock} alt="..." />
                <input
                  style={{
                    paddingLeft: "10px",
                    color: mode === "light" ? style.bggreen : style.bgwhite,
                  }}
                  placeholder="Referal ID"
                  type="text"
                />
              </div>
              <div className="validation_text reg_form_btn">
                <img src={validationIcon} alt="..." />
                <span style={{ color: style.bgred }}>
                  Any front end error will show up here!
                </span>
              </div>
              <div className="form_btn">
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
                  Register
                </button>
              </div>
              <span
                className="s_label mt-3"
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
                  &nbsp;Login!
                </Link>
              </span>
            </form>
          </div>
        </div>
      ) : (
        <RegisterAlmostDone />
      )}
    </React.Fragment>
  );
};

export default RegisterContactDetails;
