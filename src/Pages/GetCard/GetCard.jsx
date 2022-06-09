import React, { useLayoutEffect, useContext } from "react";
import { ColorContext } from "../../Context/Context";
import "./GetCard.css";
// assets
import gchip1 from "../../Assets/gchip1.png";
import gchip2 from "../../Assets/gchip2.png";
import gchip3 from "../../Assets/gchip3.png";
import gchip4 from "../../Assets/gchip4.png";
import gchip1dark from "../../Assets/gchip1dark.png";
import gchip2dark from "../../Assets/gchip2dark.png";
import gchip3dark from "../../Assets/gchip3dark.png";
import gchip4dark from "../../Assets/gchip4dark.png";
import smilingafricanwoman from "../../Assets/smiling-african-woman.png";

// swiper js
import { Swiper, SwiperSlide } from "swiper/react";

const GetCard = () => {
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
    bglightgreen: "#0E2725",
  };
  return (
    <React.Fragment>
      <div
        className="getcard_section"
        style={{
          color: mode === "light" ? style.bgblack : style.bgwhite,
        }}
      >
        <div className="gs_left">
          <div className="gs_text_content">
            <h2>
              Get more with{" "}
              <strong
                style={{
                  color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                }}
              >
                Transxnd!
              </strong>{" "}
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata{" "}
            </p>
          </div>
          <div className="gs_cards_content">
            <div className="gc_container container">
              <div className="row gy-5">
                <div className="col-lg-6">
                  <div className="gc_card">
                    <img
                      src={mode === "light" ? gchip1 : gchip1dark}
                      alt="..."
                    />
                    <h2
                      style={{
                        color:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                      }}
                    >
                      Debit card + E-Wallet
                    </h2>
                    <p>
                      Transxnd is a rapid money transfer service, designed to
                      provide a low cost service within Africa & for
                    </p>
                    <button
                      style={{
                        backgroundColor:
                          mode === "light" ? style.bgwhite : "black",
                        border: "1px solid",
                        borderColor:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                        color:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                      }}
                      className={`cus_btn1
                  ${mode === "light" ? "l_btn_light" : "l_btn_dark"}`}
                    >
                      Get your card
                    </button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="gc_card">
                    <img
                      src={mode === "light" ? gchip2 : gchip2dark}
                      alt="..."
                    />
                    <h2
                      style={{
                        color:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                      }}
                    >
                      Remittance
                    </h2>
                    <p>
                      Transxnd is a rapid money transfer service, designed to
                      provide a low cost service within Africa & for
                    </p>
                    <button
                      style={{
                        backgroundColor:
                          mode === "light" ? style.bgwhite : "black",
                        border: "1px solid",
                        borderColor:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                        color:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                      }}
                      className={`cus_btn1
                  ${mode === "light" ? "l_btn_light" : "l_btn_dark"}`}
                    >
                      Send/ Receive Money
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 c_height">
                  <div className="gc_card">
                    <img
                      src={mode === "light" ? gchip3 : gchip3dark}
                      alt="..."
                    />
                    <h2
                      style={{
                        color:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                      }}
                    >
                      Digital Bill Payments
                    </h2>
                    <p>
                      Transxnd is a rapid money transfer service, designed to
                      provide a low cost service within Africa & for
                    </p>
                    <button
                      style={{
                        backgroundColor:
                          mode === "light" ? style.bgwhite : "black",
                        border: "1px solid",
                        borderColor:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                        color:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                      }}
                      className={`cus_btn1
                  ${mode === "light" ? "l_btn_light" : "l_btn_dark"}`}
                    >
                      Pay a bill now
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 c_height">
                  <div className="gc_card">
                    <img
                      src={mode === "light" ? gchip4 : gchip4dark}
                      alt="..."
                    />
                    <h2
                      style={{
                        color:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                      }}
                    >
                      Debit card + E-Wallet
                    </h2>
                    <p>
                      Transxnd is a rapid money transfer service, designed to
                      provide a low cost service within Africa & for
                    </p>
                    <button
                      style={{
                        backgroundColor:
                          mode === "light" ? style.bgwhite : "black",
                        border: "1px solid",
                        borderColor:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                        color:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                      }}
                      className={`cus_btn1
                  ${mode === "light" ? "l_btn_light" : "l_btn_dark"}`}
                    >
                      Get your card
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="login_img_content gs_right">
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
                  height: "440px",
                  marginRight: "50px ",
                  display: "flex",
                  justifyContent: "center",
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
                  height: "440px",
                  marginRight: "50px ",
                  display: "flex",
                  justifyContent: "center",
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
                  height: "440px",
                  marginRight: "50px ",
                  display: "flex",
                  justifyContent: "center",
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
                  height: "440px",
                  marginRight: "50px ",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  className="s_bgimg"
                  src={smilingafricanwoman}
                  alt="loginBg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GetCard;
