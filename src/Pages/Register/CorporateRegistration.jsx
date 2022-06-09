import React, { useLayoutEffect, useContext } from "react";
import { ColorContext } from "../../Context/Context";
import LanguageDropdown from "../../Components/Dropdown/LanguageDropdown";
// assets
import tick from "../../Assets/Path 7452.png";
import cross from "../../Assets/cross.png";
import validationIcon from "../../Assets/validationIcon.png";
import featherLock from "../../Assets/feather-lock.png";
import smartphone from "../../Assets/Icon feather-smartphone.png";
import calendaricon from "../../Assets/calendaricon.png";
import locationimg from "../../Assets/locationimg.png";

// swiper js
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.css";
SwiperCore.use([Pagination]);

const CooperateRegistration = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div className="login_form">
          <div className="s_form">
            <div className="s_para mt-3">
              <p
                style={{
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                  fontWeight: "bold",
                }}
              >
                Please fill in the details and we'll bein touch with you!
              </p>
            </div>

            <form className="s_form_fields">
              <div className="inline_input">
                <div className="p_input">
                  <img src={featherLock} alt="..." />
                  <input
                    style={{
                      paddingLeft: "10px",
                      color: mode === "light" ? style.bggreen : style.bgwhite,
                    }}
                    placeholder="Company Name"
                    type="text"
                  />
                </div>
                <img className="tick_img ms-3" src={tick} alt="..." />
              </div>
              <div className="inline_input">
                <div className="p_input">
                  <img src={featherLock} alt="..." />
                  <input
                    style={{
                      paddingLeft: "10px",
                      color: mode === "light" ? style.bggreen : style.bgwhite,
                    }}
                    placeholder="Registration Number"
                    type="number"
                  />
                </div>
                <img className="tick_img ms-3" src={tick} alt="..." />
              </div>
              <div className="inline_input">
                <div className="p_input">
                  <img src={locationimg} alt="..." />
                  <input
                    placeholder="Enter Date"
                    type="text"
                    style={{
                      color: mode === "light" ? style.bggreen : style.bgwhite,
                    }}
                  />
                  <img src={calendaricon} alt="img" />
                </div>
                <img className="tick_img ms-3" src={tick} alt="..." />
              </div>
              <div className="inline_input">
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
                      Contact person name
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
                <img className="tick_img ms-3" src={tick} alt="..." />
              </div>
              <div className="inline_input">
                <div className="p_input">
                  <img src={featherLock} alt="..." />
                  <input
                    style={{
                      paddingLeft: "10px",
                      color: mode === "light" ? style.bggreen : style.bgwhite,
                    }}
                    placeholder="Contact Person Email Address"
                    type="text"
                  />
                </div>
                <img className="tick_img ms-3" src={cross} alt="..." />
              </div>
              <div className="inline_input">
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
                <img className="tick_img ms-3" src={cross} alt="..." />
              </div>
              <div className="validation_text mb-3 mt-3">
                <img src={validationIcon} alt="..." />
                <span style={{ color: style.bgred }}>
                  Any front end error will show up here!
                </span>
              </div>
            </form>
          </div>
        </div>
   
    </React.Fragment>
  );
};

export default CooperateRegistration;
