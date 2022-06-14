import React from "react";
import './styles.scss'
const AmountCharges = ({ flag }) => {
  return (
    <div className="transaction-steps">
      <span className="active">Fee Breakdown</span>
      <span>Fees plus Charges: USD 25.00</span>
      <span>Exchange Rate: 1</span>
    </div>
  );
};

export default AmountCharges;
