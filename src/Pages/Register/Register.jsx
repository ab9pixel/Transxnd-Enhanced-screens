import React, { useState, useLayoutEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ColorContext } from "../../Context/Context";
import RegisterPersonalDetais from "./RegisterPersonalDetais";
import CorporateRegisterStepper from "../../Components/RegistrationStepper.jsx/CorporateRegStepper";

// assets

import fbIcon from "../../Assets/fb_icon.png";
import gmailIcon from "../../Assets/gmail_icon.png";
import orLine from "../../Assets/or_line.png";
import darkorline from "../../Assets/darkor_line.png";
import slider2bg from "../../Assets/slider2bg.png";
import slider3bg from "../../Assets/slider3bg.png";
import slider4bg from "../../Assets/slider4bg.png";
import slider5bg from "../../Assets/slider5bg.png";
import slider6bg from "../../Assets/slider6bg.png";
import mailIcon from "../../Assets/mail-icon.png";
import iconBriefcase from "../../Assets/icon-briefcase.png";
import smilingafricanwoman from "../../Assets/smiling-african-woman.png";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.css";
SwiperCore.use([Pagination]);

const Register = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showComp, setShowComp] = useState(false);
  const [regCop, setRegCop] = useState(false);

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
      <div className="main_form">
        {regCop === false ? (
          <>
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
                          color:
                            mode === "light"
                              ? style.bggreen
                              : style.bgdarkgreen,
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
                      Please select how'd you like to register with us!
                    </p>
                  </div>

                  <div className="s_social_btn">
                    <button style={{ backgroundColor: "#3C66C4" }}>
                      <img src={fbIcon} alt="fbicon" />
                      <span className="ms-2">Register using Facebook</span>
                    </button>
                    <button style={{ backgroundColor: "#CF4332" }}>
                      <img src={gmailIcon} alt="gmailicon" />
                      <span className="ms-2">Register using Google</span>
                    </button>
                  </div>
                  <div className="or_line">
                    <img
                      style={{ display: mode === "light" ? "block" : "none" }}
                      src={orLine}
                      alt="img"
                    />
                    <img
                      style={{ display: mode === "light" ? "none" : "block" }}
                      src={darkorline}
                      alt="img"
                    />
                  </div>
                  <div className="s_social_btn">
                    <button
                      style={{ backgroundColor: "#27BDAD" }}
                      onClick={() => {
                        setShowComp(true);
                      }}
                    >
                      <img src={mailIcon} alt="fbicon" />
                      <span className="ms-2">Register using Email</span>
                    </button>
                  </div>
                  <form className="s_form_fields">
                    <span
                      className="s_label mt-2"
                      style={{
                        color: mode === "light" ? style.bgblack : style.bgwhite,
                      }}
                    >
                      Already a member?{" "}
                      <Link
                        style={{
                          color:
                            mode === "light"
                              ? style.bggreen
                              : style.bgdarkgreen,
                        }}
                        to="/login"
                      >
                        &nbsp;Login!
                      </Link>
                    </span>
                    <div className="form_btn reg_form_btn">
                      <button
                        onClick={() => {
                          setRegCop(true);
                        }}
                        style={{
                          border: "1px solid",
                          opacity: mode === "light" ? 1 : 0.9,
                          borderColor:
                            mode === "light"
                              ? style.bggreen
                              : style.bgdarkgreen,
                          backgroundColor: "transparent",
                          color:
                            mode === "light" ? style.bggreen : style.bgwhite,
                        }}
                        className={`cus_btn1 reg_btn1
                        ${mode === "light" ? "l_btn_light" : "l_btn_dark"}`}
                      >
                        <img
                          className="me-2"
                          src={iconBriefcase}
                          alt="fbicon"
                        />
                        Register as a corporate client
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <RegisterPersonalDetais />
            )}
          </>
        ) : (
          <CorporateRegisterStepper />
        )}
        <div className="login_img_content reg_img_content">
          <div>
            <Swiper
              pagination
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{ disableOnInteraction: false, delay: 2500 }}
            >
              <SwiperSlide
                style={{
                  width: "546px",
                  height: "557px",
                  marginRight: "50px ",
                }}
              >
                <img
                  className="s_bgimg"
                  src={smilingafricanwoman}
                  alt="signupBg"
                />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "546px",
                  height: "475px",
                  marginRight: "50px ",
                }}
              >
                <img className="s_bgimg" src={slider2bg} alt="signupBg" />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "546px",
                  height: "475px",
                  marginRight: "50px ",
                }}
              >
                <img className="s_bgimg" src={slider3bg} alt="signupBg" />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "546px",
                  height: "475px",
                  marginRight: "50px ",
                }}
              >
                <img className="s_bgimg" src={slider4bg} alt="signupBg" />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "546px",
                  height: "475px",
                  marginRight: "50px ",
                }}
              >
                <img className="s_bgimg" src={slider5bg} alt="signupBg" />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "546px",
                  height: "475px",
                  marginRight: "50px ",
                }}
              >
                <img className="s_bgimg" src={slider6bg} alt="signupBg" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
