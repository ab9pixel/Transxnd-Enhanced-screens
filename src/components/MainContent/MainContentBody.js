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
  const [collectionPoint, setCollectionPoint] = useState(false)
  return (
    <div className="MainContentBody">
      <div className="MainContentBodyWrap">
        {/* TEST CODE */}
      {/* END TEST CODE */}
        {
          !sendMoneyNow ? <MoneyCalculator setSendMoneyNow={setSendMoneyNow}/> :
        <div className = "SendMoneyWrap">
          <InnerSidebar progress = {progress} setProgress = {(val)=> {setProgress(val)}} />
          <InnerContent progress = {progress} setAddedBenData={setAddedBenData} setProgress = {(val)=> {setProgress(val)}} collectionPoint={collectionPoint}   />
        </div>
        }
        <SupportMessage buttonLink={addedBen} setCollectionPoint= {(val)=>{setCollectionPoint(val)}}/>
      </div>        
    </div>
  );
};

export default MainContentBody;
