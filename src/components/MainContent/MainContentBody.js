import React, {useState} from "react";
import "./styles.scss";
import MoneyCalculator from "./MoneyCalculator";
import InnerSidebar from "../InnerSidebar";
import InnerContent from "../InnerContent";
const MainContentBody = () => {
  const [progress, setProgress] = useState(0)
  const [sendMoneyNow, setSendMoneyNow] = useState (false)
  return (
    <div className="MainContentBody">
      
      <div className="MainContentBodyWrap">
        {/* TEST CODE */}
      {/* END TEST CODE */}
        {
          !sendMoneyNow ? <MoneyCalculator setSendMoneyNow={setSendMoneyNow}/> :
        <div className = "SendMoneyWrap">
          <InnerSidebar progress = {progress} setProgress = {(val)=> {setProgress(val)}} />
          <InnerContent progress = {progress} setProgress = {(val)=> {setProgress(val)}}  />
        </div>
        }
      </div>        
    </div>
  );
};

export default MainContentBody;
