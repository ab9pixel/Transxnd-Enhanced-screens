import React, { useContext } from "react";
import path1 from "../../Assets/Path 7590d.png";
import path from "../../Assets/Path 7590.png";
import { ColorContext } from "../../Context/Context";

const UserGetDetail = () => {
  const { color } = useContext(ColorContext);
  let { mode } = color;
  return (
    <div
      className={mode==='light'? "user_get_detail_container":'user_get_detail_container2'}
      // style={{ backgroundColor: mode === "light" ? "#ddf8f6" : "" }}
    >
      <div className="getName" 
          style={{ backgroundColor: mode === "dark" ? "#2d4b4b" : "#ddf8f6" }}
          >
        <h5>USER DETAILS</h5>
        <div
          className={`user_get_name ${mode === "dark" ? "" : "light_h6_name"}`}
        >
          <div>
            <p>First Name</p>
            <h6>Olalekan</h6>
          </div>
          <div>
            <p>Last Name</p>
            <h6>Shoan</h6>
          </div>
        </div>
        <div
          className={`user_get_name ${mode === "dark" ? "" : "light_h6_name"}`}
        >
          <div>
            <p>Date of Birth</p>
            <h6>December 20,2020</h6>
          </div>
        </div>
        <div
          className={`user_get_name ${mode === "dark" ? "" : "light_h6_name"}`}
        >
          <div>
            <p>Email Address</p>
            <h6>olaleken@gmail.com</h6>
          </div>
        </div>
        <div
          className={`user_get_name ${mode === "dark" ? "" : "light_h6_name"}`}
        >
          <div>
            <p>Phone Number</p>
            <h6>+92 312 4867 888</h6>
          </div>
        </div>
      </div>
      {mode === "light" ? (
        <img className="v_line" src={path} alt="..." />
      ) : (
        <img className="v_line" src={path1} alt="..." />
      )}
      <div className="user_identification_div "
          style={{ backgroundColor: mode === "dark" ? "#2d4b4b" : "#ddf8f6" }}
      
      >
        <h5>USER IDENTIFICATION</h5>
        <div
          className={`user_get_name ${mode === "dark" ? "" : "light_h6_name"}`}
        >
          <div>
            <p>Identification type</p>
            <h6>ID CARD</h6>
          </div>
        </div>
        <div
          className={`user_get_name ${mode === "dark" ? "" : "light_h6_name"}`}
        >
          <div>
            <p>Identification Number</p>
            <h6>1234-5678-9123</h6>
          </div>
          <div>
            <p>ID Expiry Date</p>
            <h6>April 23, 2021</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGetDetail;
