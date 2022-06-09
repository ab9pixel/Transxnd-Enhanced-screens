import React, { useLayoutEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ColorContext } from "../../Context/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import smilingafricanwoman from "../../Assets/smiling-african-woman.png";
import featherMail from "../../Assets/feather-mail.png";
import slider2bg from "../../Assets/slider2bg.png";
import slider3bg from "../../Assets/slider3bg.png";
import slider4bg from "../../Assets/slider4bg.png";
import slider5bg from "../../Assets/slider5bg.png";
import slider6bg from "../../Assets/slider6bg.png";
import validationIcon from "../../Assets/validationIcon.png";

import "./Forms.css";
// assets
import forgotlogo from "../../Assets/forgotlogo.png";

const Forget = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <React.Fragment>
      <div className="main_form">
        <div className="login_form">
          <div className="s_form f_form">
            <div className="s_text">
              <h2
                className="fw-bold mt-4"
                style={{
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                }}
              >
                Forgot{" "}
                <strong
                  style={{
                    color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                  }}
                >
                  Password?
                </strong>
              </h2>
            </div>
            <div className="s_para mt-3">
              <p
                style={{
                  width: "90%",
                  margin: "0 auto",
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                }}
              >
                To err is to human! Enter the your email address and we'll send
                you a magic link!
              </p>
            </div>
            <div className="s_img mt-3">
              <img src={forgotlogo} alt="lgLogo" />
            </div>
            <form className="s_form_fields mt-3">
              <div className="p_input">
                <img src={featherMail} alt="..." />
                <input
                  style={{
                    paddingLeft: "15px",
                    color: mode === "light" ? style.bggreen : style.bgwhite,
                  }}
                  placeholder="Email address"
                  type="email"
                />
              </div>
              <div className="validation_text" style={{marginTop:"3rem"}}>
                  <img src={validationIcon} alt="..." />
                  <span style={{color:style.bgred}}>Password does't match Please reenter!</span>
              </div>
              <div className="form_btn ">
                <button
                  style={{
                    padding: "7px 40px",
                    border: "1px solid",
                    borderColor:
                      mode === "light" ? style.bggreen : "transparent",
                    backgroundColor:
                      mode === "light" ? style.bgwhite : style.bglightgreen,
                    color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                  }}
                  className={`cus_btn1 mt-4
                  ${mode === "light" ? "l_btn_light" : "l_btn_dark"}`}
                >
                  Get Majic Link
                </button>
              </div>
              <span
                className="s_label mt-3"
                style={{
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                }}
              >
                Didn't receive a code?{" "}
                <Link
                  to="#"
                  style={{
                    color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                  }}
                >
                  &nbsp;Contact Help Center!
                </Link>
              </span>
            </form>
          </div>
        </div>

        <div className="login_img_content">
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
                  height: "475px",
                  marginRight: "50px ",
                }}
              >
                <img
                  className="s_bgimg"
                  src={smilingafricanwoman}
                  alt="loginBg"
                />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "546px",
                  height: "475px",
                  marginRight: "50px ",
                }}
              >
                <img className="s_bgimg" src={slider2bg} alt="loginBg" />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "546px",
                  height: "475px",
                  marginRight: "50px ",
                }}
              >
                <img className="s_bgimg" src={slider3bg} alt="loginBg" />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "546px",
                  height: "475px",
                  marginRight: "50px ",
                }}
              >
                <img className="s_bgimg" src={slider4bg} alt="loginBg" />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "546px",
                  height: "475px",
                  marginRight: "50px ",
                }}
              >
                <img className="s_bgimg" src={slider5bg} alt="loginBg" />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "546px",
                  height: "475px",
                  marginRight: "50px ",
                }}
              >
                <img className="s_bgimg" src={slider6bg} alt="loginBg" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Forget;
