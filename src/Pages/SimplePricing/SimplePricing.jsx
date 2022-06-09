import React, { useLayoutEffect, useContext } from "react";
import { ColorContext } from "../../Context/Context";
import "./SimplePricing.css";
import dot from "../../Assets/dot.png";
import debit1 from "../../Assets/debit1.png";
import debit2 from "../../Assets/debit2.png";
const SimplePricing = () => {
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

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="simple_pricing_section">
        <h2
          style={{
            color: mode === "light" ? style.bgblack : style.bgdarkgreen,
          }}
        >
          Simple{" "}
          <strong
            style={{
              color: mode === "light" ? style.bggreen : style.bgwhite,
            }}
          >
            and
          </strong>{" "}
          Transparent{" "}
          <strong
            style={{
              color: mode === "light" ? style.bggreen : style.bgwhite,
            }}
          >
            Pricing!
          </strong>
        </h2>
        <div className="spricing_content">
          <div
            className="sp_leftbox"
            style={{
              border: "1px solid #27BDAD",
              color: mode === "light" ? style.bgblack : style.bgwhite,
            }}
          >
            <h2
              style={{
                color: mode === "light" ? style.bggreen : style.bgdarkgreen,
              }}
            >
              TRANSCATION FEE
            </h2>
            <p className="mt-2">
              each transaction will cost an additional fee of
            </p>
            <div className="sp_uper">
              <h1
                style={{
                  color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                }}
              >
                1.5%
              </h1>
              <span>+ Tax</span>
            </div>
            <p>
              Instant money transfer within{" "}
              <strong
                style={{
                  color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                }}
              >
                seconds!
              </strong>
            </p>
            <div className="sp_list mt-3">
              <ul>
                <li>
                  <img src={dot} alt="..." />
                  <span>
                    Lowest transaction fee of{" "}
                    <strong
                      style={{
                        color:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                      }}
                    >
                      1.5%
                    </strong>
                  </span>
                </li>
                <li>
                  <img src={dot} alt="..." />
                  <span>
                    Instant money transfer within
                    <strong
                      style={{
                        color:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                      }}
                    >
                      {" "}
                      seconds!
                    </strong>
                  </span>
                </li>
                <li>
                  <img src={dot} alt="..." />
                  <span>
                    Lowest transaction fee of{" "}
                    <strong
                      style={{
                        color:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                      }}
                    >
                      1.5%
                    </strong>
                  </span>
                </li>
                <li>
                  <img src={dot} alt="..." />
                  <span>
                    Instant money transfer within
                    <strong
                      style={{
                        color:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                      }}
                    >
                      {" "}
                      seconds!
                    </strong>
                  </span>
                </li>
              </ul>
            </div>
            <button
              style={{
                backgroundColor: "transparent",
                border: "1px solid",
                borderColor:
                  mode === "light" ? style.bggreen : style.bgdarkgreen,
                color: mode === "light" ? style.bgblack : style.bgdarkgreen,
              }}
              className={`cus_btn1
                  ${mode === "light" ? "l_btn_light" : "l_btn_dark"}`}
            >
              Sign-up today!
            </button>
          </div>
          <div className="sp_rightbox" style={{ border: "1px solid #27BDAD" }}>
            <h2
              className="s_none"
              style={{
                color: mode === "light" ? style.bggreen : style.bgdarkgreen,
              }}
            >
              TRANSXND CARD FEE
            </h2>
            <div className="spcards_content">
              <div className="sp_card">
                <h2
                  className="mb-3"
                  style={{
                    color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                  }}
                >
                  Card Name
                </h2>
                <img src={debit1} alt="..." />
                <div
                  className="sp_uper"
                  style={{
                    color: mode === "light" ? style.bgblack : style.bgwhite,
                  }}
                >
                  <span>XOF</span>
                  <h1
                    style={{
                      fontSize: "3rem",
                      margin: "0 8px",
                      color:
                        mode === "light" ? style.bggreen : style.bgdarkgreen,
                    }}
                  >
                    125
                  </h1>
                  <span>+ Tax</span>
                </div>
                <div
                  className="sp_list"
                  style={{
                    color: mode === "light" ? style.bgblack : style.bgwhite,
                  }}
                >
                  <ul>
                    <li>
                      <img src={dot} alt="..." />
                      <span>
                        Lowest transaction fee of{" "}
                        <strong
                          style={{
                            color:
                              mode === "light"
                                ? style.bggreen
                                : style.bgdarkgreen,
                          }}
                        >
                          1.5%
                        </strong>
                      </span>
                    </li>
                    <li>
                      <img src={dot} alt="..." />
                      <span>
                        Instant money transfer within
                        <strong
                          style={{
                            color:
                              mode === "light"
                                ? style.bggreen
                                : style.bgdarkgreen,
                          }}
                        >
                          {" "}
                          seconds!
                        </strong>
                      </span>
                    </li>
                    <li>
                      <img src={dot} alt="..." />
                      <span>
                        Lowest transaction fee of{" "}
                        <strong
                          style={{
                            color:
                              mode === "light"
                                ? style.bggreen
                                : style.bgdarkgreen,
                          }}
                        >
                          1.5%
                        </strong>
                      </span>
                    </li>
                    <li>
                      <img src={dot} alt="..." />
                      <span>
                        Instant money transfer within
                        <strong
                          style={{
                            color:
                              mode === "light"
                                ? style.bggreen
                                : style.bgdarkgreen,
                          }}
                        >
                          {" "}
                          seconds!
                        </strong>
                      </span>
                    </li>
                  </ul>
                </div>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid",
                    borderColor:
                      mode === "light" ? style.bggreen : style.bgdarkgreen,
                    color: mode === "light" ? style.bgblack : style.bgdarkgreen,
                  }}
                  className={`cus_btn1
                  ${mode === "light" ? "l_btn_light" : "l_btn_dark"}`}
                >
                  Apply for a card
                </button>
              </div>

              <div className="sp_card">
                <h2
                  className="mb-3"
                  style={{
                    color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                  }}
                >
                  Card Name
                </h2>
                <img src={debit2} alt="..." />
                <div
                  className="sp_uper"
                  style={{
                    color: mode === "light" ? style.bgblack : style.bgwhite,
                  }}
                >
                  <span>XOF</span>
                  <h1
                    style={{
                      fontSize: "3rem",
                      margin: "0 8px",
                      color:
                        mode === "light" ? style.bggreen : style.bgdarkgreen,
                    }}
                  >
                    125
                  </h1>
                  <span>+ Tax</span>
                </div>
                <div
                  className="sp_list"
                  style={{
                    color: mode === "light" ? style.bgblack : style.bgwhite,
                  }}
                >
                  <ul>
                    <li>
                      <img src={dot} alt="..." />
                      <span>
                        Lowest transaction fee of{" "}
                        <strong
                          style={{
                            color:
                              mode === "light"
                                ? style.bggreen
                                : style.bgdarkgreen,
                          }}
                        >
                          1.5%
                        </strong>
                      </span>
                    </li>
                    <li>
                      <img src={dot} alt="..." />
                      <span>
                        Instant money transfer within
                        <strong
                          style={{
                            color:
                              mode === "light"
                                ? style.bggreen
                                : style.bgdarkgreen,
                          }}
                        >
                          {" "}
                          seconds!
                        </strong>
                      </span>
                    </li>
                    <li>
                      <img src={dot} alt="..." />
                      <span>
                        Lowest transaction fee of{" "}
                        <strong
                          style={{
                            color:
                              mode === "light"
                                ? style.bggreen
                                : style.bgdarkgreen,
                          }}
                        >
                          1.5%
                        </strong>
                      </span>
                    </li>
                    <li>
                      <img src={dot} alt="..." />
                      <span>
                        Instant money transfer within
                        <strong
                          style={{
                            color:
                              mode === "light"
                                ? style.bggreen
                                : style.bgdarkgreen,
                          }}
                        >
                          {" "}
                          seconds!
                        </strong>
                      </span>
                    </li>
                  </ul>
                </div>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid",
                    borderColor:
                      mode === "light" ? style.bggreen : style.bgdarkgreen,
                    color: mode === "light" ? style.bgblack : style.bgdarkgreen,
                  }}
                  className={`cus_btn1
                  ${mode === "light" ? "l_btn_light" : "l_btn_dark"}`}
                >
                  Apply for a card
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SimplePricing;
