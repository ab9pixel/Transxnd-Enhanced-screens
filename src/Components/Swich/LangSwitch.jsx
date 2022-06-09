import React, { useContext } from "react";
import { ColorContext } from "../../Context/Context";
import lang1 from "../../Assets/lang1.png";
import lang2 from "../../Assets/lang2.png";

import "./style.css";
const LangSwitch = ({id,...props}) => {
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
      <div>
        <input
          type="checkbox"
          id={id}
          className="lol-checkbox"
        />
        <label
          className="button"
          htmlFor={id}
          style={{
            border: "1px solid",
            borderColor: mode === "light" ? style.bggreen : style.bgdarkgreen,
            color: mode === "light" ? style.bggreen : style.bgdarkgreen,
          }}
        >
          <div
            className="knob"
            style={{
              backgroundColor:
                mode === "light" ? style.bggreen : style.bgdarkgreen,
            }}
          ></div>
          <div className="subscribe"><img src={lang1} alt="..." /></div>
          <div className="alright"><img src={lang2} alt="..." /></div>
        </label>
      </div>
    </React.Fragment>
  );
};

export default LangSwitch;
