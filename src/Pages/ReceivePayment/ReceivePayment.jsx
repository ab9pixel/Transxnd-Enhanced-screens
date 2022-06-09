import React, { useLayoutEffect, useContext } from "react";
import { ColorContext } from "../../Context/Context";
import "./ReceivePayment.css";
// assets
import dot from "../../Assets/dot.png";
import rpimg from "../../Assets/rpimg.png";
const ReceivePayment = () => {
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
      <div
        className="receivep_payment_section"
        style={{
          color: mode === "light" ? style.bgblack : style.bgwhite,
        }}
      >
        <div className="rp_left">
          <h2>
            Send or Receive payments <br />
            <strong
              style={{
                color: mode === "light" ? style.bggreen : style.bgdarkgreen,
              }}
            >
              with Transxnd!
            </strong>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet
          </p>
          <div className="rpl_list">
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
                  Instant money transfer within{" "}
                  <strong
                    style={{
                      color:
                        mode === "light" ? style.bggreen : style.bgdarkgreen,
                    }}
                  >
                    seconds
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
                  Instant money transfer within{" "}
                  <strong
                    style={{
                      color:
                        mode === "light" ? style.bggreen : style.bgdarkgreen,
                    }}
                  >
                    seconds
                  </strong>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="rp_right">
          <img src={rpimg} alt="..." />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReceivePayment;
