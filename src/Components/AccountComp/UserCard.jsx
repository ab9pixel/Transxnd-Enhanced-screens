import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ColorContext } from "../../Context/Context";
// Assets
import user from "../../Assets/Path 7446.png";
import bar from "../../Assets/Group 4426.png";
import barL from "../../Assets/Group 4426l.png";
import arrow from "../../Assets/Group 4427.png";
import arrowL from "../../Assets/Group 4427l.png";
import card from "../../Assets/Group 4428.png";
import cardL from "../../Assets/Group 4428l.png";
import bill from "../../Assets/Group 4429.png";
import billL from "../../Assets/Group 4429l.png";
import money from "../../Assets/Group 4430.png";
import moneyL from "../../Assets/Group 4430l.png";
import referL from "../../Assets/Group 4483l.png";
import refer from "../../Assets/Group 4483.png";
import lockL from "../../Assets/Icon feather-lock1.png";
import lock from "../../Assets/Icon feather-lockdd.png";
import setting from "../../Assets/Icon feather-settings.png";
import settingL from "../../Assets/Icon feather-settingsl.png";

const UserCard = () => {
  const { color } = useContext(ColorContext);
  let { mode } = color;
  let style = {
    bgClr: mode === "light" ? "#27BDAD" : "#112626",
    bgblnce: mode === "light" ? "white" : "#72FAEC",
  };

  const history = useHistory();
  console.log(history.location.pathname);
  // let [path, setPath] = useState('')
  const handleActive = (e) => {
    history.push(`/${e}`);
    // setPath(e)
  };

  return (
    <React.Fragment>
      <div className="user_card_container">
        <div
          className="userCard_main_div"
          style={{ backgroundColor: style.bgClr }}
        >
          <div className="user_img_div">
            <img src={user} alt="..." />
          </div>
          <div className="userName">
            <p>User Name</p>
          </div>
          <div
            className="user_id_div"
            style={{
              backgroundColor: mode === "light" ? "white" : "transparent",
              color: mode === "dark" ? style.bgblnce : "",
              border: `1px solid ${style.bgblnce}`,
            }}
          >
            <p>TCN #123456789#</p>
          </div>
          <div
            className="user_email"
            style={{ color: mode === "dark" ? "#72faec" : "black" }}
          >
            <p>username@123gmail.com</p>
          </div>
          <div
            className="user_balance_div"
            style={{ backgroundColor: style.bgblnce, color: style.bgClr }}
          >
            <p>
              Your Balance : <strong>XOF 123,454,675</strong>{" "}
            </p>
          </div>
          <div className="user_ul_div">
            <ul className={mode === "light" ? "user_ul" : "dark_user_ul"}>
              <li
                onClick={() => handleActive("account-overview")}
                // style={history.location.pathname === '/' ? { backgroundColor: '#a1ece6' } : null}
              >
                <img src={mode === "dark" ? bar : barL} alt="..." />
                <span>Overview</span>
              </li>
              <li
                onClick={() => handleActive("historic-transaction")}
                // style={history.location.pathname === '/historic-transaction' ? { backgroundColor: '#a1ece6' } : null}
              >
                <img src={mode === "dark" ? arrow : arrowL} alt="..." />
                <span>Historic Transactions</span>
              </li>
              <li onClick={() => handleActive("active-card")}>
                <img src={mode === "dark" ? card : cardL} alt="..." />
                <span>Cards Management</span>
              </li>
              <li onClick={() => handleActive("pay-bill")}>
                <img src={mode === "dark" ? bill : billL} alt="..." />
                <span>Pay a Bill</span>
              </li>
              <li onClick={() => handleActive("select-bank")}>
                <img src={mode === "dark" ? money : moneyL} alt="..." />
                <span>Send Money</span>
              </li>
              <li onClick={() => handleActive("refer-friend")}>
                <img src={mode === "dark" ? refer : referL} alt="..." />
                <span>Refer a Friend</span>
              </li>
              <li onClick={() => handleActive("change-password")}>
                <img src={mode === "dark" ? lock : lockL} alt="..." />
                <span>Account Security</span>
              </li>
              <li
                onClick={() => handleActive("setting")}
                // style={history.location.pathname === '/setting' ? { backgroundColor: '#a1ece6' } : null}
              >
                <img src={mode === "dark" ? setting : settingL} alt="..." />
                <span>Profile settings</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserCard;
