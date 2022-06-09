import React, { useState, useLayoutEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ColorContext } from "../../Context/Context";
import "./Register.css";
// assets
import regimg from "../../Assets/regimg.png";
import iconEdit from "../../Assets/Icon-edit.png";
// swiper js
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.css";
import RegisterProcess from "./RegisterProcess";
SwiperCore.use([Pagination]);

const RegisterAlmostDone = () => {
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
      {/* <div className="main_form"> */}
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
                Please select how'd you like to register with us!
              </p>
            </div>
            <h2
              className="fs-6 mt-5"
              style={{
                color: mode === "light" ? style.bggreen : style.bgdarkgreen,
              }}
            >
              You are almost done
            </h2>
            <div className="s_para mt-3">
              <p
                style={{
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                }}
              >
                We've sent you a 4 digit OTP. Please check you phone or email to
                finish registration!
              </p>
            </div>
            <div className="mt-4">
              <img src={regimg} alt="..." />
            </div>
            <div className="d-flex align-items-center mt-3">
              <span
                style={{
                  color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                }}
              >
                +92 312 486 7888
              </span>
              <img className="ms-2" src={iconEdit} alt="..." />
            </div>
            <div className="optp_code d-flex justify-content-between">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "64px",
                  height: "60px",
                  border: "1px solid",
                  borderColor:
                    mode === "light" ? style.bgblack : style.bgdarkgreen,
                }}
              >
                <span
                  className="fs-2"
                  style={{
                    color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                  }}
                >
                  1
                </span>
              </div>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "64px",
                  height: "60px",
                  border: "1px solid",
                  borderColor:
                    mode === "light" ? style.bgblack : style.bgdarkgreen,
                }}
              >
                <span
                  className="fs-2"
                  style={{
                    color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                  }}
                >
                  2
                </span>
              </div>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "64px",
                  height: "60px",
                  border: "1px solid",
                  borderColor:
                    mode === "light" ? style.bgblack : style.bgdarkgreen,
                }}
              >
                <span
                  className="fs-2"
                  style={{
                    color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                  }}
                >
                  3
                </span>
              </div>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "64px",
                  height: "60px",
                  border: "1px solid",
                  borderColor:
                    mode === "light" ? style.bgblack : style.bgdarkgreen,
                }}
              >
                <span
                  className="fs-2"
                  style={{
                    color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                  }}
                >
                  4
                </span>
              </div>
            </div>

            <form className="s_form_fields">
              <div className="form_btn mt-3">
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
                className="s_label mt-4"
                style={{
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                }}
              >
                Not a member?{" "}
                <Link
                  style={{
                    color: mode === "light" ? style.bggreen : style.bggreen,
                  }}
                  to="/login"
                >
                  &nbsp;Register Now!
                </Link>
              </span>
            </form>
          </div>
        </div>
      ) : (
        <RegisterProcess />
      )}
      {/* </div> */}
    </React.Fragment>
  );
};

export default RegisterAlmostDone;
