import React, { useLayoutEffect, useContext } from "react";
import { ColorContext } from "../Context/Context";

import transxdlogo from "../Assets/transxdlogo.png";
import transxdlogomob from "../Assets/transxdlogomob.png";
import fbIcon from "../Assets/fbicon.png";
import fbIconMb from "../Assets/fbiconmb.png";
import instaIcon from "../Assets/instaicon.png";
import instaIconMb from "../Assets/instaiconmb.png";
import twiterIcon from "../Assets/twitericon.png";
import twiterIconMb from "../Assets/twitericonmb.png";
import linkedinIcon from "../Assets/linkedinicon.png";
import linkedinIconMb from "../Assets/linkediniconmb.png";
import newslettericon from "../Assets/newslettericon.png";
import newslettericonmob from "../Assets/newslettericonmob.png";
import lightimg from "../Assets/lightimg.png";
import darkimg from "../Assets/darkimg.png";
import copyright from "../Assets/copyright.png";
import copyrightmb from "../Assets/copyrightmb.png";
import "./style.css";
import { Link } from "react-router-dom";
import LangSwitch from "../Components/Swich/LangSwitch";
const Footer = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDark = () => {
    localStorage.setItem("theme", "dark");
    let set = localStorage.getItem("theme");
    // console.log(set);
    setColor({
      type: "Dark",
      payload: set,
    });
    document.body.classList.remove("white");
    document.body.classList.add("black");
  };
  const handleLight = () => {
    localStorage.setItem("theme", "light");
    let set = localStorage.getItem("theme");
    // console.log(set);

    setColor({
      type: "light",
      payload: set,
    });
    document.body.classList.remove("black");
    document.body.classList.add("white");
  };

  const { color, setColor } = useContext(ColorContext);
  let { mode } = color;
  let style = {
    bggreen: "#27BDAD",
    bgblue: "#3C66C4",
    bglightblue: "#E9F8F7",
    bgred: "#CF4332",
    bgblack: "#000000",
    bgwhite: "#FFFFFF",
    bgdarkgreen: "#72FAEC",
    bglightgreen: "#0E2725",
  };

  return (
    <React.Fragment>
      <div
        className="footer mt-4"
        style={{
          background: mode === "light" ? style.bglightblue : style.bgblack,
          color: mode === "light" ? style.bgblack : style.bgwhite,
        }}
      >
        <div className="f_main_c">
          <div className="footer_container">
            <div className="fc_2">
              <Link to="/">
                {mode === "light" ? (
                  <img src={transxdlogo} alt="img" />
                ) : (
                  <img
                    style={{ width: "250px" }}
                    src={transxdlogomob}
                    alt="img"
                  />
                )}
              </Link>
              <div className="fc2_m">
                <div className="fc2_button">
                  <Link to="/register">
                    <button
                      style={{
                        marginTop: "0.8rem",
                        border: "1px solid",
                        borderColor:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,

                        padding: "8px 20px",
                      }}
                      className={`cus_btn1 me-4
                    ${mode === "light" ? "s_btn_light" : "s_btn_dark"}`}
                    >
                      Sign up
                    </button>
                  </Link>
                  <Link to="/login">
                    <button
                      style={{
                        backgroundColor: "transparent",
                        marginTop: "0.8rem",
                        border: "1px solid",
                        borderColor:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,

                        padding: "8px 28px",
                      }}
                      className={`cus_btn1
                    ${mode === "light" ? "l_btn_light" : "l_btn_dark"}`}
                    >
                      Login
                    </button>
                  </Link>
                </div>

                <p>
                  Transxnd Remittance Services SARL Quatier Avenou, Boulevard Du
                  30 Aout, 05 BP 851 Lome, Togo
                </p>
              </div>

              <div className="fc_btm_desk">
                <div className="fc_btm">
                  <div>
                    <span>IBC: BVI 2022059</span>
                    <span>RCCM: MA-BKO 2019 E-14904</span>
                    <span>RCCM: NE-NIM 01 2019 B13 00387</span>
                  </div>
                  <div>
                    <span>RCCM: CI-ABJ 2020 B 01087</span>
                    <span>RCCM: TG-LOM 2019 B3045</span>
                  </div>
                </div>
                <div className="fc_social">
                  {mode === "light" ? (
                    <div>
                      <img src={fbIcon} alt="icon" />
                      <img src={instaIcon} alt="icon" />
                      <img src={twiterIcon} alt="icon" />
                      <img src={linkedinIcon} alt="icon" />
                    </div>
                  ) : (
                    <div>
                      <img src={fbIconMb} alt="icon" />
                      <img src={instaIconMb} alt="icon" />
                      <img src={twiterIconMb} alt="icon" />
                      <img src={linkedinIconMb} alt="icon" />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="fc_1">
              <div>
                <strong
                  className="mb-2"
                  style={{
                    color: mode === "light" ? style.bgblack : style.bgwhite,
                  }}
                >
                  Transxd
                </strong>
                <Link className="text-decoration-none" to="/">
                  <span>Home</span>
                </Link>
                <Link className="text-decoration-none" to="/receive-payment">
                  <span>Payments</span>
                </Link>
                <Link className="text-decoration-none" to="/features">
                  <span>Features</span>
                </Link>
                <Link className="text-decoration-none" to="#">
                  <span>About us</span>
                </Link>
                <Link className="text-decoration-none" to="#">
                  <span>Contact us</span>
                </Link>
                <Link className="text-decoration-none" to="/account-overview">
                  <span>Profile</span>
                </Link>
              </div>
              <div>
                <strong
                  className="mb-2"
                  style={{
                    color: mode === "light" ? style.bgblack : style.bgwhite,
                  }}
                >
                  Legal
                </strong>
                <Link className="text-decoration-none" to="/terms-condition">
                  <span>Terms of use</span>
                </Link>
                <Link className="text-decoration-none" to="#">
                  <span>Privacy Policy</span>
                </Link>
                <Link className="text-decoration-none" to="#">
                  <span>Company Policy</span>
                </Link>
              </div>
              <div>
                <strong
                  className="mb-2"
                  style={{
                    color: mode === "light" ? style.bgblack : style.bgwhite,
                  }}
                >
                  Business
                </strong>
                <Link className="text-decoration-none" to="#">
                  <span>Contact us</span>
                </Link>
                <Link className="text-decoration-none" to="#">
                  <span>invest with us</span>
                </Link>
                <Link className="text-decoration-none" to="#">
                  <span>Feedback</span>
                </Link>
              </div>
            </div>
            <div className="fc_3">
              <h2
                className="fs-5"
                style={{
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                }}
              >
                Newsletter
              </h2>
              <p>
                Join all the people who get the best exchange rates with
                Transxnd. We’re cheaper than most leading African Banks. Enjoy
                rapid transfers and the lowest fees. Your friends and family get
                more when you send them money with Transxnd.
              </p>
              <div className="ns_letter">
                <input
                  style={{
                    border: "1px solid",
                    borderColor:
                      mode === "light" ? style.bggreen : style.bgdarkgreen,
                    color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                  }}
                  type="text"
                  placeholder="Enter Email"
                />
                {mode === "light" ? (
                  <img src={newslettericon} alt="..." />
                ) : (
                  <img src={newslettericonmob} alt="..." />
                )}
              </div>
              <div className="f_switch w-100 d-flex justify-content-end align-items-center mt-3">
                {mode === "light" ? (
                  <button
                    className="btn s_btn"
                    onClick={() => {
                      handleDark();
                    }}
                  >
                    <img
                      src={lightimg}
                      style={{
                        width: "35px",
                      }}
                      alt="..."
                    />
                  </button>
                ) : (
                  <button
                    className="btn s_btn"
                    onClick={() => {
                      handleLight();
                    }}
                  >
                    <img
                      src={darkimg}
                      style={{
                        width: "35px",
                      }}
                      alt="..."
                    />
                  </button>
                )}

                <LangSwitch id="lang-3" />
              </div>
            </div>

            <div className="fc_btm_mob">
              <div className="fc_btm">
                <div>
                  <span>IBC: BVI 2022059</span>

                  <span>RCCM: MA-BKO 2019 E-14904</span>

                  <span>RCCM: NE-NIM 01 2019 B13 00387</span>
                </div>
                <div>
                  <span>RCCM: CI-ABJ 2020 B 01087</span>

                  <span>RCCM: TG-LOM 2019 B3045</span>
                </div>
              </div>
              <div className="fc_social">
                <div>
                  <img src={fbIcon} alt="icon" />
                  <img src={instaIcon} alt="icon" />
                  <img src={twiterIcon} alt="icon" />
                  <img src={linkedinIcon} alt="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="copy_right_text">
            <span>
              Copyright{" "}
              {mode === "light" ? (
                <img src={copyright} alt="img" />
              ) : (
                <img src={copyrightmb} alt="img" />
              )}{" "}
              img2021. Transxnd Remittance Services SARL. All rights reserved.{" "}
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
