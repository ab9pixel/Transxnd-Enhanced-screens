import React, {useState} from "react";
import "./styles.scss";
import MoneyCalculator from "./MoneyCalculator";
import InnerSidebar from "../InnerSidebar";
import InnerContent from "../InnerContent";
import SupportMessage from "../SupportMessage";
const MainContentBody = () => {
  const [progress, setProgress] = useState(0)
  const [sendMoneyNow, setSendMoneyNow] = useState (false)
  const [addedBen, setAddedBenData] = useState("")
  return (
    <div className="MainContentBody">
      
      <div className="MainContentBodyWrap">
        {/* TEST CODE */}
      {/* END TEST CODE */}
        {
          !sendMoneyNow ? <MoneyCalculator setSendMoneyNow={setSendMoneyNow}/> :
        <div className = "SendMoneyWrap">
          <InnerSidebar progress = {progress} setProgress = {(val)=> {setProgress(val)}} />
          <InnerContent progress = {progress} setAddedBenData={setAddedBenData} setProgress = {(val)=> {setProgress(val)}}  />
        </div>
        }
        <SupportMessage buttonLink={addedBen}/>
      </div>        
    </div>
  );
};

export default MainContentBody;
