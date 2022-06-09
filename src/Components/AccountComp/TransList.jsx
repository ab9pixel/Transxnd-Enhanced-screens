import React, { useContext } from "react";
import { ColorContext } from "../../Context/Context";
import up from "../../Assets/Group 4450.png";
import down from "../../Assets/Group 4451.png";

const listData = [
  {
    id: "HVPACHV134",
    img: up,
    source: "Card",
    date: "Dec 23 2020 | 6:04:47 PM",
    amount: "12132",
    type: "Credit",
    balance: "3232",
  },
  {
    id: "HVPACHV134",
    img: down,
    source: "Card",
    date: "Dec 23 2020 | 6:04:47 PM",
    amount: "12132",
    type: "Credit",
    balance: "3232",
  },
];

const TransList = () => {
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
    bglightgreen: "#0A1716",
    bgcgreen: "#1EE834",
  };

  return (
    <React.Fragment>
      {listData.map((val, i) => (
        <>
          <div
            key={i}
            className="t_cards mt-4"
            style={{ color: mode === "light" ? style.bgblack : style.bgwhite }}
          >
            <img src={val.img} alt="..." />
            <div>
              <span>{val.id}</span>
              <span style={{ fontSize: "0.9rem" }}>{val.source}</span>
              <span style={{ fontSize: "0.9rem" }}>{val.date}</span>
              <span>{val.id}</span>
            </div>
            <div className="">
              <span
                style={{
                  color: style.bgcgreen,
                  fontSize:'.85rem'
                }}
              >
                {val.amount}
              </span>
              <span>{val.type}</span>
            </div>
          </div>
          <div
            style={{ color: mode === "light" ? style.bgblack : style.bgwhite }}
            className="d-flex align-items-center w-100 justify-content-between ps-3 pe-3 mt-2"
          >
            <span>Balance</span>
            <span
              style={{
                color: mode === "light" ? style.bggreen : style.bgdarkgreen,
              }}
            >
              {val.balance}
            </span>
          </div>
        </>
      ))}
    </React.Fragment>
  );
};

export default TransList;
