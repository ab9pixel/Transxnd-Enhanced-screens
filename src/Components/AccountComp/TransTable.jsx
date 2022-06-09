import React, { useContext } from "react";
import { ColorContext } from "../../Context/Context";
import up from "../../Assets/Group 4450.png";
import down from "../../Assets/Group 4451.png";
import TransList from "./TransList";

const tableData = [
  {
    id: '4343435453443',
    type: 'Credit',
    source: 'Card',
    date: 'December 20,2021',
    beneficiary: 'Miss Cecilia Kerluke',
    amount: '122199',
    balance: '2321',
    img: up
  },
  {
    id: '4343435453443',
    type: 'Credit',
    source: 'Card',
    date: 'December 20,2021',
    beneficiary: 'Miss Cecilia Kerluke',
    amount: '122199',
    balance: '2321',
    img: up
  },
  {
    id: '4343435453443',
    type: 'Credit',
    source: 'Card',
    date: 'December 20,2021',
    beneficiary: 'Miss Cecilia Kerluke',
    amount: '122199',
    balance: '2321',
    img: down
  },
  {
    id: '4343435453443',
    type: 'Credit',
    source: 'Card',
    date: 'December 20,2021',
    beneficiary: 'Miss Cecilia Kerluke',
    amount: '122199',
    balance: '2321',
    img: up
  },
  {
    id: '4343435453443',
    type: 'Credit',
    source: 'Card',
    date: 'December 20,2021',
    beneficiary: 'Miss Cecilia Kerluke',
    amount: '122199',
    balance: '2321',
    img: down
  },
  {
    id: '4343435453443',
    type: 'Credit',
    source: 'Card',
    date: 'December 20,2021',
    beneficiary: 'Miss Cecilia Kerluke',
    amount: '122199',
    balance: '2321',
    img: up
  },
  {
    id: '4343435453443',
    type: 'Credit',
    source: 'Card',
    date: 'December 20,2021',
    beneficiary: 'Miss Cecilia Kerluke',
    amount: '122199',
    balance: '2321',
    img: down
  },
  {
    id: '4343435453443',
    type: 'Credit',
    source: 'Card',
    date: 'December 20,2021',
    beneficiary: 'Miss Cecilia Kerluke',
    amount: '122199',
    balance: '2321',
    img: down
  },
  {
    id: '4343435453443',
    type: 'Credit',
    source: 'Card',
    date: 'December 20,2021',
    beneficiary: 'Miss Cecilia Kerluke',
    amount: '122199',
    balance: '2321',
    img: up
  },
  {
    id: '4343435453443',
    type: 'Credit',
    source: 'Card',
    date: 'December 20,2021',
    beneficiary: 'Miss Cecilia Kerluke',
    amount: '122199',
    balance: '2321',
    img: up
  },
]

const TransTable = ({ className }) => {
  const { color } = useContext(ColorContext);
  let { mode } = color;
  let style = {
    bgClr: mode === "light" ? "#27BDAD" : "#112626",
    bgblnce: mode === "light" ? "black" : "white",
  };

  return (
    <div>
      <div className={`transaction_table_main_div ${className}`}>
        <table>
          <thead>
            <tr
              style={{
                backgroundColor: mode === "light" ? "#B5EEE8" : "#1b3b3a",
                color: style.bgblnce,
              }}
            >
              <th>Transaction id</th>
              <th>Transaction type</th>
              <th>Source</th>
              <th>Transaction Date/Time</th>
              <th>Beneficiary</th>
              <th>Amount</th>
              <th>Balance</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((val, i) => (

              <tr
                className={
                  mode === "dark" ? "dark_mode_table" : "light_mode_table"
                }
                key={i}
              >
                <td>{val.id}</td>
                <td>{val.type}</td>
                <td>{val.source}</td>
                <td>{val.date}</td>
                <td>{val.beneficiary}</td>
                <td style={{ color: "#1EE834", fontWeight: "bold" }}>{val.amount}</td>
                <td style={{ color: "#27BDAD", fontWeight: "bold" }}>{val.balance}</td>
                <td>
                  <img src={val.img} alt="..." />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="transaction_table_main_div_mb">
        <TransList />
      </div>
    </div>
  );
};

export default TransTable;
