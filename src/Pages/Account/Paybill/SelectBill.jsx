import React, { useContext, useLayoutEffect } from "react";
import UserCard from "../../../Components/AccountComp/UserCard";
import { useHistory } from "react-router-dom";
import bulb from "../../../Assets/bil1.png";
import mob2 from "../../../Assets/Group 4234l.png";
import mob2D from "../../../Assets/Group 4234d.png";
import bulb2 from "../../../Assets/Group 4228l.png";
import bulb2D from "../../../Assets/Group 4228d.png";
import water2 from "../../../Assets/Group 4231l.png";
import water2D from "../../../Assets/Group 4231d.png";
import gas2 from "../../../Assets/Group 4233l.png";
import gas2D from "../../../Assets/Group 4233d.png";
import mob from "../../../Assets/bil2.png";
import water from "../../../Assets/bil3.png";
import gas from "../../../Assets/bil4.png";
import "../styles/Paybill.css";
import { ColorContext } from "../../../Context/Context";
import MobViewBack from "../../../Components/MobViewBack";

const SelectBill = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { color } = useContext(ColorContext);
  let { mode } = color;
  const history = useHistory();
  return (
    <div className="pay_Bil_container dashboard_main">
      <div className="bak_div">
        <MobViewBack link="/account-overview" value="PAY A BILL" />
      </div>
      <div className="pay_bill_main_div">
        <div className="pay_user_card_div">
          <UserCard />
        </div>
        <div
          className={
            mode === "light"
              ? "select_bill_div"
              : "select_bill_div select_bill_div_D"
          }
          style={{
            backgroundColor: mode === "light" ? "#E9F8F7" : "#0E2725",
          }}
        >
          <h4 style={{ color: mode === "light" ? "#27BDAD" : "#72FAEC" }}>
            PAY A BILL
          </h4>
          <p style={{ color: mode === "light" ? "" : "white" }}>
            Please select a vendor type and continue to proceed!
          </p>
          <div
            className="bill_type_select"
            style={{
              backgroundColor: mode === "light" ? "#D0F2EE" : "#142b28",
            }}
          >
            <div className="bil_type">
              <div
                className="_img_bill"
                style={{ border: "1px solid #27BDAD" }}
              >
                <img
                  className="light_bil"
                  src={mode === "light" ? mob : mob2D}
                  alt="..."
                />
                <img className="hover_light_bil" src={mob2} alt="..." />
              </div>
              <p style={{ color: mode === "light" ? "" : "white" }}>
                Mobile <br /> Recharge
              </p>
            </div>
            <div className="bil_type">
              <div
                className="_img_bill"
                style={{ border: "1px solid #27BDAD" }}
              >
                <img
                  className="light_bil"
                  src={mode === "light" ? bulb : bulb2D}
                  alt="..."
                />
                <img className="hover_light_bil" src={bulb2} alt="..." />
              </div>
              <p style={{ color: mode === "light" ? "" : "white" }}>
                Electricity <br /> Bills
              </p>
            </div>
            <div className="bil_type">
              <div
                className="_img_bill"
                style={{ border: "1px solid #27BDAD" }}
              >
                <img
                  className="light_bil"
                  src={mode === "light" ? water : water2D}
                  alt="..."
                />
                <img className="hover_light_bil" src={water2} alt="..." />
              </div>
              <p style={{ color: mode === "light" ? "" : "white" }}>
                Water <br /> Bills
              </p>
            </div>
            <div className="bil_type">
              <div
                className="_img_bill"
                style={{ border: "1px solid #27BDAD" }}
              >
                <img
                  className="light_bil"
                  src={mode === "light" ? gas : gas2D}
                  alt="..."
                />
                <img className="hover_light_bil" src={gas2} alt="..." />
              </div>
              <p style={{ color: mode === "light" ? "" : "white" }}>
                Gas/CNG <br /> Bills
              </p>
            </div>
            <div className="bil_type">
              <div className="empty_box_bil"></div>
              <p style={{ color: mode === "light" ? "" : "white" }}>
                Mobile <br /> Recharge
              </p>
            </div>
            <div className="bil_type">
              <div className="empty_box_bil"></div>
              <p style={{ color: mode === "light" ? "" : "white" }}>
                Electricity <br /> Bills
              </p>
            </div>
            <div className="bil_type">
              <div className="empty_box_bil"></div>
              <p style={{ color: mode === "light" ? "" : "white" }}>
                Water <br /> Bills
              </p>
            </div>
            <div className="bil_type">
              <div className="empty_box_bil"></div>
              <p style={{ color: mode === "light" ? "" : "white" }}>
                Gas/CNG <br /> Bills
              </p>
            </div>
          </div>
          <div className="abslt_btn_div">
            <button
              className="back_btn"
              style={{
                color: mode === "light" ? "#27BDAD" : "#72FAEC",
                border: "1px solid #27BDAD",
              }}
            >
              Back
            </button>
            <button
              className="con_btn"
              style={{
                backgroundColor: mode === "light" ? "#27BDAD" : "#72FAEC",
                color: mode === "light" ? "white" : "black",
              }}
              onClick={() => history.push("/bil-detail")}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectBill;
