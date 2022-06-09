import React, { useState, useEffect, useContext } from "react";
import { ColorContext } from "../Context/Context";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

// assets
import transxdlogo from "../Assets/transxdlogo.png";
import togglebtnl from "../Assets/togglebtnl.png";
import transxdlogomob from "../Assets/transxdlogomob.png";
import lightimg from "../Assets/lightimg.png";
import darkimg from "../Assets/darkimg.png";
import userprofileimg from "../Assets/userprofileimg.png";
import path from "../Assets/path.png";
import pathmb from "../Assets/pathmb.png";
import LangSwitch from "../Components/Swich/LangSwitch";
import togglebtn from "../Assets/togglebtn.png";
import overviewicond from "../Assets/overviewicon.png";
import overviewiconl from "../Assets/overviewiconl.png";
import historiciconl from "../Assets/historiciconl.png";
import historicicond from "../Assets/historicicond.png";
import cardmanageiconl from "../Assets/cardmanageiconl.png";
import cardmanageicond from "../Assets/cardmanageicond.png";
import paybilliconl from "../Assets/paybilliconl.png";
import paybillicond from "../Assets/paybillicond.png";
import sendmoneyiconl from "../Assets/sendmoneyiconl.png";
import sendmoneyicond from "../Assets/sendmoneyicond.png";
import refericonl from "../Assets/refericonl.png";
import refericond from "../Assets/refericond.png";
import securityiconl from "../Assets/securityiconl.png";
import securityicond from "../Assets/securityicond.png";
import settingicond from "../Assets/settingicond.png";
import settingiconl from "../Assets/settingiconl.png";
import logouticonl from "../Assets/logouticonl.png";
import logouticond from "../Assets/logouticond.png";
import UserDropdown from "../Components/Dropdown/UserDropdown";

const Navbar = () => {
  let [isActive, setIsActive] = useState(false);
  let [open, setOpen] = useState(false);
  const [showMode, setShowMode] = useState(false);
  const { color, setColor } = useContext(ColorContext);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => window.removeEventListener("click", handleClose);
  }, []);

  const handleLogin = () => {
    setTimeout(() => {
      setIsActive(true);
    }, 1000);
  };
  const handleLogout = () => {
    setIsActive(false);
  };

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
  // const classes = useStyles({
  //   color: mode === "light" ? "#000" : "#fff",
  //   backgroundColor: mode === "light" ? "#FFFFFF" : "#0E2725",
  // });

  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg c_navbar sticky-top"
        id="top"
        style={{
          backgroundColor:
            mode === "light" ? style.bglightblue : style.bglightgreen,
        }}
      >
        <div
          className={
            isActive ? "c_container container" : "container cn_container"
          }
        >
          <div className="d-flex align-items-center">
            <Link className="navbar-brand" to="/">
              {mode === "light" ? (
                <img className="nav_trans_logo" src={transxdlogo} alt="logo" />
              ) : (
                <img
                  className="nav_trans_logo"
                  src={transxdlogomob}
                  alt="logo"
                />
              )}
            </Link>

            <div className="nav_switch">
              <li className="nav-item">
                <LangSwitch id="lang" />
              </li>
              <li className="nav-item">
                <button
                  style={{ display: showMode === false ? "block" : "none" }}
                  className="btn s_btn"
                  onClick={() => {
                    setShowMode(true);
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
                <button
                  className="btn s_btn"
                  style={{ display: showMode === false ? "none" : "block" }}
                  onClick={() => {
                    setShowMode(false);
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
              </li>
            </div>
          </div>
          {isActive ? (
            <div className="d-flex align-items-center">
              <button
                className="navbar-toggler"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(!open);
                }}
              >
                <img
                  src={mode === "light" ? togglebtnl : togglebtn}
                  alt="img"
                />
              </button>
            </div>
          ) : (
            <div className="d-flex align-items-center">
              <button
                className="navbar-toggler"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(!open);
                }}
              >
                <img
                  src={mode === "light" ? togglebtnl : togglebtn}
                  alt="img"
                />
              </button>
            </div>
          )}
          <div className="collapse desk_nav_collapse navbar-collapse">
            <ul
              className="navbar-nav align-items-center me-auto mb-2 mb-lg-0"
              style={{
                color: mode === "light" ? style.bggreen : style.bgwhite,
              }}
            >
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName={
                    mode === "light" ? "link_activel" : "link_actived"
                  }
                  className="nav-link"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              {mode === "light" ? (
                <img className="path_line" src={path} alt="img" />
              ) : (
                <img className="path_line" src={pathmb} alt="img" />
              )}
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName={
                    mode === "light" ? "link_activel" : "link_actived"
                  }
                  className="nav-link"
                  to="/features"
                >
                  Features
                </NavLink>
              </li>
              {mode === "light" ? (
                <img className="path_line" src={path} alt="img" />
              ) : (
                <img className="path_line" src={pathmb} alt="img" />
              )}
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName={
                    mode === "light" ? "link_activel" : "link_actived"
                  }
                  className="nav-link"
                  to="/receive-payment"
                >
                  Payments
                </NavLink>
              </li>
              {mode === "light" ? (
                <img className="path_line" src={path} alt="img" />
              ) : (
                <img className="path_line" src={pathmb} alt="img" />
              )}

              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName={
                    mode === "light" ? "link_activel" : "link_actived"
                  }
                  className="nav-link"
                  to="/pricing"
                >
                  Pricing
                </NavLink>
              </li>
              {mode === "light" ? (
                <img className="path_line" src={path} alt="img" />
              ) : (
                <img className="path_line" src={pathmb} alt="img" />
              )}

              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName={
                    mode === "light" ? "link_activel" : "link_actived"
                  }
                  className="nav-link"
                  to="/request-new-card"
                >
                  Get Card
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {mode === "light" ? (
                  <button
                    // style={{ display: showMode === false ? "block" : "none" }}
                    className="btn s_btn"
                    onClick={() => {
                      // setShowMode(true);
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
                    // style={{ display: showMode === false ? "none" : "block" }}
                    onClick={() => {
                      // setShowMode(false);
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
              </li>
              <li className="nav-item">
                <LangSwitch id="lang-2" />
              </li>
              {isActive ? (
                <>
                  <UserDropdown />
                </>
              ) : (
                <>
                  <li className="nav-item ms-4">
                    <Link to="/register">
                      <button
                        style={{
                          // backgroundColor: style.bggreen,
                          border: "1px solid",
                          borderColor:
                            mode === "light"
                              ? style.bggreen
                              : style.bgdarkgreen,

                          padding: "8px 20px",
                        }}
                        // className={`cus_btn1 me-2 ${classes.root}`}
                        className={`cus_btn1 me-2
                          ${mode === "light" ? "s_btn_light" : "s_btn_dark"}`}
                      >
                        Sign up
                      </button>
                    </Link>
                  </li>
                  <li onClick={handleLogin} className="nav-item">
                    <Link to="/login">
                      <button
                        style={{
                          border: "1px solid",
                          borderColor:
                            mode === "light"
                              ? style.bggreen
                              : style.bgdarkgreen,
                          padding: "8px 28px",
                        }}
                        className={`cus_btn1 ms-2
                        ${mode === "light" ? "l_btn_light" : "l_btn_dark"}`}
                      >
                        Login
                      </button>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div
            className="collapse show mob_nav_collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            {open ? (
              <ul
                onClick={(e) => e.stopPropagation()}
                className="navbar-nav mob_nav mb-2 mb-lg-0"
                style={{
                  color: mode === "light" ? style.bggreen : style.bgwhite,
                  backgroundColor:
                    mode === "light" ? style.bglightblue : style.bglightgreen,
                }}
              >
                {!isActive ? (
                  <>
                    {/* dsa */}
                    <Link className="navbar-brand" to="/" onClick={handleClose}>
                      {mode === "light" ? (
                        <img
                          className="nav_trans_logo"
                          src={transxdlogo}
                          alt="logo"
                        />
                      ) : (
                        <img
                          className="nav_trans_logo"
                          src={transxdlogomob}
                          alt="logo"
                        />
                      )}
                    </Link>
                    <div className="d-flex mt-4">
                      <li
                        onClick={() => {
                          handleLogin();
                          handleClose();
                        }}
                        className="nav-item"
                      >
                        <Link to="/login">
                          <button
                            style={{
                              backgroundColor: "transparent",
                              border: "1px solid",
                              borderColor:
                                mode === "light"
                                  ? style.bggreen
                                  : style.bgdarkgreen,
                              color:
                                mode === "light"
                                  ? style.bggreen
                                  : style.bgdarkgreen,
                              padding: "4px 32px",
                            }}
                            className={`cus_btn1
                            ${mode === "light" ? "l_btn_light" : "l_btn_dark"}`}
                          >
                            Login
                          </button>
                        </Link>
                      </li>
                      <li onClick={handleClose} className="nav-item mb-4">
                        <Link to="/register">
                          <button
                            style={{
                              backgroundColor: "transparent",
                              border: "1px solid",
                              borderColor:
                                mode === "light"
                                  ? style.bggreen
                                  : style.bgdarkgreen,
                              color:
                                mode === "light"
                                  ? style.bggreen
                                  : style.bgdarkgreen,
                              padding: "4px 25px",
                            }}
                            className={`cus_btn1 ms-3
                            ${mode === "light" ? "s_btn_light" : "s_btn_dark"}`}
                          >
                            Sign up
                          </button>
                        </Link>
                      </li>
                    </div>
                  </>
                ) : (
                  <div className="d-flex flex-column align-items-center">
                    <img className="usericon" src={userprofileimg} alt="img" />

                    <div className="userinfo_text align-items-center mt-2">
                      <h2>Salman Altaf</h2>
                      <button
                        style={{
                          backgroundColor: "transparent",
                          border: "1px solid",
                          borderColor:
                            mode === "light"
                              ? style.bggreen
                              : style.bgdarkgreen,
                          color:
                            mode === "light"
                              ? style.bggreen
                              : style.bgdarkgreen,
                          padding: "0px 25px",
                        }}
                        className="cus_btn1 mt-2 mb-2"
                      >
                        TCN # 123456789
                      </button>
                      <span
                        className="text_darkgray"
                        style={{
                          color:
                            mode === "light" ? style.bgblack : style.bggreen,
                        }}
                      >
                        salmanaltaf@gmail.com
                      </span>
                      <button
                        style={{
                          border: "none",
                          backgroundColor:
                            mode === "light"
                              ? style.bggreen
                              : style.bgdarkgreen,
                          color: style.bgblack,
                          padding: "8px 25px",
                        }}
                        className="cus_btn1 mt-2 mb-2"
                      >
                        Your Balance: XOF 104,535.53
                      </button>
                    </div>
                    <hr />
                  </div>
                )}

                {!isActive ? (
                  <>
                    <li onClick={handleClose} className="nav-item">
                      <NavLink
                        exact
                        activeClassName={
                          mode === "light" ? "link_activel" : "link_actived"
                        }
                        className="nav-link"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li onClick={handleClose} className="nav-item">
                      <NavLink
                        exact
                        activeClassName={
                          mode === "light" ? "link_activel" : "link_actived"
                        }
                        className="nav-link"
                        to="/features"
                      >
                        Features
                      </NavLink>
                    </li>
                    <li onClick={handleClose} className="nav-item">
                      <NavLink
                        exact
                        activeClassName={
                          mode === "light" ? "link_activel" : "link_actived"
                        }
                        className="nav-link"
                        to="/receive-payment"
                      >
                        Payments
                      </NavLink>
                    </li>
                    <li onClick={handleClose} className="nav-item">
                      <NavLink
                        exact
                        activeClassName={
                          mode === "light" ? "link_activel" : "link_actived"
                        }
                        className="nav-link"
                        to="/pricing"
                      >
                        Pricing
                      </NavLink>
                    </li>

                    <li onClick={handleClose} className="nav-item">
                      <NavLink
                        exact
                        activeClassName={
                          mode === "light" ? "link_activel" : "link_actived"
                        }
                        className="nav-link"
                        to="/request-new-card"
                      >
                        Get Card
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <div style={{ width: "80%", margin: "0 auto" }}>
                      <li
                        onClick={handleClose}
                        className="nav-item d-flex align-items-center"
                      >
                        {mode === "light" ? (
                          <img src={overviewiconl} alt="..." />
                        ) : (
                          <img src={overviewicond} alt="..." />
                        )}
                        <Link className="nav-link ms-3" to="/account-overview">
                          Overview
                        </Link>
                      </li>
                      <li
                        onClick={handleClose}
                        className="nav-item d-flex align-items-center"
                      >
                        {mode === "light" ? (
                          <img src={historiciconl} alt="..." />
                        ) : (
                          <img src={historicicond} alt="..." />
                        )}
                        <Link
                          className="nav-link ms-3"
                          to="/historic-transaction"
                        >
                          Historic Transactions
                        </Link>
                      </li>
                      <li
                        onClick={handleClose}
                        className="nav-item d-flex align-items-center"
                      >
                        {mode === "light" ? (
                          <img src={cardmanageiconl} alt="..." />
                        ) : (
                          <img src={cardmanageicond} alt="..." />
                        )}
                        <Link className="nav-link ms-3" to="/active-card">
                          Card Management
                        </Link>
                      </li>
                      <li
                        onClick={handleClose}
                        className="nav-item d-flex align-items-center"
                      >
                        {mode === "light" ? (
                          <img src={paybilliconl} alt="..." />
                        ) : (
                          <img src={paybillicond} alt="..." />
                        )}
                        <Link className="nav-link ms-3" to="/pay-bill">
                          Pay a Bill
                        </Link>
                      </li>
                      <li
                        onClick={handleClose}
                        className="nav-item d-flex align-items-center"
                      >
                        {mode === "light" ? (
                          <img src={sendmoneyiconl} alt="..." />
                        ) : (
                          <img src={sendmoneyicond} alt="..." />
                        )}
                        <Link className="nav-link ms-3" to="/select-bank">
                          Send Money
                        </Link>
                      </li>
                      <li
                        onClick={handleClose}
                        className="nav-item d-flex align-items-center"
                      >
                        {mode === "light" ? (
                          <img src={refericonl} alt="..." />
                        ) : (
                          <img src={refericond} alt="..." />
                        )}
                        <Link className="nav-link ms-3" to="/refer-friend">
                          Refer a Friend
                        </Link>
                      </li>

                      <li
                        onClick={handleClose}
                        className="nav-item d-flex align-items-center mt-5"
                      >
                        {mode === "light" ? (
                          <img src={securityiconl} alt="..." />
                        ) : (
                          <img src={securityicond} alt="..." />
                        )}
                        <Link className="nav-link ms-3" to="/change-password">
                          Account Security
                        </Link>
                      </li>
                      <li
                        onClick={handleClose}
                        className="nav-item d-flex align-items-center"
                      >
                        {mode === "light" ? (
                          <img src={settingiconl} alt="..." />
                        ) : (
                          <img src={settingicond} alt="..." />
                        )}
                        <Link className="nav-link ms-3" to="/setting">
                          Profile Settings
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          handleLogout();
                          handleClose();
                        }}
                        className="nav-item d-flex align-items-center"
                      >
                        {mode === "light" ? (
                          <img src={logouticonl} alt="..." />
                        ) : (
                          <img src={logouticond} alt="..." />
                        )}
                        <Link
                          onClick={() => {
                            handleClose();
                            handleLogout();
                          }}
                          className="nav-link ms-3"
                          to="#"
                        >
                          Logout
                        </Link>
                      </li>
                    </div>
                  </>
                )}
              </ul>
            ) : null}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
