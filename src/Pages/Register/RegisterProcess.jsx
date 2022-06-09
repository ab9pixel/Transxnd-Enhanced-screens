import React, { useState, useLayoutEffect, useContext } from "react";
import { ColorContext } from "../../Context/Context";

import "./Register.css";
// assets

import loader1L from "../../Assets/loader1L.png";
import loader2L from "../../Assets/loader2L.png";
import loaderd1 from "../../Assets/loaderd1.png";
import loaderd2 from "../../Assets/loaderd2.png";
// swiper
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);

const RegisterProcess = () => {
  let [load] = useState(false);

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

          <div style={{ marginTop: "8rem", height: "70px" }}>
            {mode === "light" ? (
              <img src={!load ? loader1L : loader2L} alt="..." />
            ) : (
              <img src={!load ? loaderd1 : loaderd2} alt="..." />
            )}
          </div>
          <div className="s_para mt-4">
            <p
              style={{
                color: mode === "light" ? style.bgblack : style.bgwhite,
              }}
            >
              Please enter your email address and password to login..
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RegisterProcess;
