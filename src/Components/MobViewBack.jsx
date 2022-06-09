import React, { useContext } from "react";
import { Link } from "react-router-dom";
import backd from "../Assets/Icon feather-arrow-left.png";
import backl from "../Assets/back.png";
import { ColorContext } from "../Context/Context";

const MobViewBack = ({ link, value }) => {
  const { color } = useContext(ColorContext);
  let { mode } = color;
  return (
    <div>
      <div className="back_link_div">
        <Link to={link} className="mob_back_link">
          <img src={mode === "light" ? backl : backd} alt="..." />{" "}
          <span style={{color:mode==='light'?'black':''}} > {value}</span>
        </Link>
      </div>
    </div>
  );
};

export default MobViewBack;
